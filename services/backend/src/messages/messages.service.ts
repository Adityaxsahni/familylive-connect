import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
@Injectable()
export class MessageService {
  private readonly items: any[] = [];
  send(senderId: string, body: any) { const message = { id: randomUUID(), senderId, receiverId: body.receiverId, content: body.content, type: body.type ?? 'text', createdAt: new Date().toISOString() }; this.items.push(message); return message; }
  inbox(userId: string) { return this.items.filter((m) => m.senderId === userId || m.receiverId === userId); }
}
