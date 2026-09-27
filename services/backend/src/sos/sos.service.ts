import { Injectable } from '@nestjs/common';

@Injectable()
export class SosService {
  private readonly sosEvents = new Map<string, { status: string; latitude: number; longitude: number; message?: string }>();

  trigger(body: { userId: string; latitude: number; longitude: number; message?: string }) {
    this.sosEvents.set(body.userId, {
      status: 'active',
      latitude: body.latitude,
      longitude: body.longitude,
      message: body.message ?? 'Emergency SOS triggered',
    });

    return {
      success: true,
      sos: this.sosEvents.get(body.userId),
    };
  }

  getStatus(userId: string) {
    return this.sosEvents.get(userId) ?? { status: 'inactive' };
  }
}
