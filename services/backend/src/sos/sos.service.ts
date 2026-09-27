import { Injectable } from '@nestjs/common';
@Injectable()
export class SosService {
  private readonly active = new Map<string, any>();
  trigger(userId: string, body: any) { const event = { userId, latitude: body.latitude, longitude: body.longitude, message: body.message ?? 'Emergency SOS triggered', status: 'active', createdAt: new Date().toISOString() }; this.active.set(userId, event); return event; }
  cancel(userId: string) { this.active.delete(userId); return { status: 'cancelled' }; }
  status(userId: string) { return this.active.get(userId) ?? { status: 'inactive' }; }
}
