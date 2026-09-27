import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';

@Injectable()
export class FamilyService {
  private readonly connectionRecords: any[] = [];
  private readonly circleRecords: any[] = [];
  request(userId: string, body: { uniqueUserId: string; relationshipLabel: string }) {
    if (!body.uniqueUserId || !body.relationshipLabel) throw new NotFoundException('Unique ID and relationship are required');
    const connection = { id: randomUUID(), userId, ...body, status: 'pending', createdAt: new Date().toISOString() };
    this.connectionRecords.push(connection); return connection;
  }
  listConnections(userId: string) { return this.connectionRecords.filter((x) => x.userId === userId); }
  circle(userId: string, body: { name: string; description?: string }) {
    if (!body.name) throw new NotFoundException('Circle name is required');
    const circle = { id: randomUUID(), ownerUserId: userId, ...body, createdAt: new Date().toISOString() };
    this.circleRecords.push(circle); return circle;
  }
}
