import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { randomUUID } from 'crypto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  private readonly users = new Map<string, any>();
  private readonly emails = new Map<string, string>();

  constructor(private readonly jwt: JwtService) {}

  async register(input: { name: string; email: string; password: string }) {
    const email = input.email.toLowerCase();
    if (this.emails.has(email)) throw new ConflictException('Email already registered');
    const id = randomUUID();
    const user = { id, uniqueUserId: `FLC-${Math.floor(100000 + Math.random() * 900000)}`, name: input.name, email, passwordHash: await bcrypt.hash(input.password, 12) };
    this.users.set(id, user); this.emails.set(email, id);
    return this.session(user);
  }

  async login(input: { email: string; password: string }) {
    const user = this.users.get(this.emails.get(input.email.toLowerCase()) ?? '');
    if (!user || !(await bcrypt.compare(input.password, user.passwordHash))) throw new UnauthorizedException('Invalid credentials');
    return this.session(user);
  }

  verifyAccessToken(token: string) { return this.jwt.verify(token); }
  findById(id: string) { return this.users.get(id); }

  private session(user: any) {
    const publicUser = this.publicUser(user);
    return { user: publicUser, accessToken: this.jwt.sign({ sub: user.id, uniqueUserId: user.uniqueUserId, email: user.email }) };
  }
  private publicUser(user: any) { return { id: user.id, uniqueUserId: user.uniqueUserId, name: user.name, email: user.email }; }
}
