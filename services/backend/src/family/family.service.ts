import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';

@Injectable()
export class FamilyService {
  private readonly connections: any[] = [];
  private readonly circles: any[] = [];
  request(userId: string, body: { uniqueUserId: string; relationshipLabel: string }) {
    if (!body.uniqueUserId || !body.relationshipLabel) throw new NotFoundException('Unique ID and relationship are required');
    const connection = { id: randomUUID(), userId, ...body, status: 'pending', createdAt: new Date().toISOString() };
    this.connections.push(connection); return connection;
  }
  connections(userId: string) { return this.connections.filter((x) => x.userId === userId); }
  circle(userId: string, body: { name: string; description?: string }) { const c = { id: randomUUID(), ownerUserId: userId, ...body }; this.circles.push(c); return c; }
}
