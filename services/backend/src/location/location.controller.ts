import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { LocationService } from './location.service';
@Controller('api/v1/location')
export class LocationController {
  constructor(private readonly locations: LocationService) {}
  @Post('update') update(@Body() body: any, @Req() req: any) { return this.locations.update(req.user?.id ?? 'demo-user', body); }
  @Get('current/:userId') current(@Param('userId') id: string) { return this.locations.current(id); }
  @Get('history/:userId') history(@Param('userId') id: string) { return this.locations.history(id); }
}
