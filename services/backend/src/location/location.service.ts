import { ForbiddenException, Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

@Injectable()
export class LocationService {
  private readonly latest = new Map<string, any>(); private readonly histories = new Map<string, any[]>();
  update(userId: string, data: any) {
    const latitude = Number(data.latitude), longitude = Number(data.longitude);
    if (!Number.isFinite(latitude) || latitude < -90 || latitude > 90 || !Number.isFinite(longitude) || longitude < -180 || longitude > 180) throw new ForbiddenException('Invalid coordinates');
    const location = { id: randomUUID(), userId, latitude, longitude, accuracy: data.accuracy, updatedAt: new Date().toISOString() };
    this.latest.set(userId, location); this.histories.set(userId, [...(this.histories.get(userId) ?? []).slice(-99), location]); return location;
  }
  currentForViewer(userId: string, viewerId: string) { if (userId !== viewerId) throw new ForbiddenException('Location sharing permission is required'); return this.latest.get(userId) ?? null; }
  historyForViewer(userId: string, viewerId: string) { if (userId !== viewerId) throw new ForbiddenException('Location sharing permission is required'); return this.histories.get(userId) ?? []; }
}
