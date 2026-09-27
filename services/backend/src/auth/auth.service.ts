import { Injectable } from '@nestjs/common';
import { UserRecord } from '../common/types';

@Injectable()
export class AuthService {
  private readonly users: UserRecord[] = [
    {
      id: 'user-1',
      uniqueUserId: 'FLC-1001',
      name: 'Ava Johnson',
      email: 'ava@example.com',
      password: 'password123',
    },
    {
      id: 'user-2',
      uniqueUserId: 'FLC-1002',
      name: 'Daniel Johnson',
      email: 'daniel@example.com',
      password: 'password123',
    },
  ];

  async validateUser(email: string, password: string) {
    const user = this.users.find(
      (entry) => entry.email === email && entry.password === password,
    );

    if (!user) {
      return null;
    }

    return {
      id: user.id,
      uniqueUserId: user.uniqueUserId,
      name: user.name,
      email: user.email,
    };
  }

  signAccessToken(user: { id: string; uniqueUserId: string; name: string; email: string }) {
    return `access-token-for-${user.id}`;
  }

  signRefreshToken(user: { id: string; uniqueUserId: string; name: string; email: string }) {
    return `refresh-token-for-${user.id}`;
  }
}
