import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
@Injectable()
export class LocationService {
  private readonly latest = new Map<string, any>(); private readonly histories = new Map<string, any[]>();
  update(userId: string, data: any) { const location = { id: randomUUID(), userId, latitude: Number(data.latitude), longitude: Number(data.longitude), accuracy: data.accuracy, updatedAt: new Date().toISOString() }; this.latest.set(userId, location); this.histories.set(userId, [...(this.histories.get(userId) ?? []).slice(-99), location]); return location; }
  current(userId: string) { return this.latest.get(userId) ?? null; }
  history(userId: string) { return this.histories.get(userId) ?? []; }
}
