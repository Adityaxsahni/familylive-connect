import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { LocationService } from './location.service';

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Post('update')
  updateLocation(@Body() body: { latitude: number; longitude: number; accuracy: number; speed?: number }) {
    return this.locationService.updateLocation(body);
  }

  @Get('current/:userId')
  getCurrentLocation(@Param('userId') userId: string) {
    return this.locationService.getCurrentLocation(userId);
  }

  @Get('history/:userId')
  getHistory(@Param('userId') userId: string) {
    return this.locationService.getHistory(userId);
  }
}
