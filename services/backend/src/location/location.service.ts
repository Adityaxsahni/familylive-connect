import { Injectable } from '@nestjs/common';

@Injectable()
export class LocationService {
  private readonly locations = new Map<string, { latitude: number; longitude: number; accuracy: number; updatedAt: Date }>();

  updateLocation(body: { latitude: number; longitude: number; accuracy: number; speed?: number }) {
    const userId = 'user-1';

    this.locations.set(userId, {
      latitude: body.latitude,
      longitude: body.longitude,
      accuracy: body.accuracy,
      updatedAt: new Date(),
    });

    return {
      success: true,
      userId,
      location: this.locations.get(userId),
    };
  }

  getCurrentLocation(userId: string) {
    const location = this.locations.get(userId);

    if (!location) {
      return null;
    }

    return {
      userId,
      ...location,
    };
  }

  getHistory(userId: string) {
    const location = this.locations.get(userId);

    return location ? [{ userId, ...location }] : [];
  }
}
