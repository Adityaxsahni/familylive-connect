import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  private readonly users = new Map<string, any>();
  private readonly emails = new Map<string, string>();

  async register(input: { name: string; email: string; password: string }) {
    if (this.emails.has(input.email)) throw new ConflictException('Email already registered');
    const id = randomUUID();
    const user = { id, uniqueUserId: `FLC-${Math.floor(100000 + Math.random() * 900000)}`, name: input.name, email: input.email, passwordHash: await bcrypt.hash(input.password, 12) };
    this.users.set(id, user); this.emails.set(input.email, id);
    return { user: this.publicUser(user), accessToken: `development-token:${id}` };
  }

  async login(input: { email: string; password: string }) {
    const user = this.users.get(this.emails.get(input.email) ?? '');
    if (!user || !(await bcrypt.compare(input.password, user.passwordHash))) throw new UnauthorizedException('Invalid credentials');
    return { user: this.publicUser(user), accessToken: `development-token:${user.id}` };
  }

  private publicUser(user: any) { return { id: user.id, uniqueUserId: user.uniqueUserId, name: user.name, email: user.email }; }
}
