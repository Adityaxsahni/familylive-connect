import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { LocationService } from './location.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('api/v1/location')
@UseGuards(JwtAuthGuard)
export class LocationController {
  constructor(private readonly locations: LocationService) {}
  @Post('update') update(@Body() body: any, @Req() req: any) { return this.locations.update(req.user.id, body); }
  @Get('current/:userId') current(@Param('userId') id: string, @Req() req: any) { return this.locations.currentForViewer(id, req.user.id); }
  @Get('history/:userId') history(@Param('userId') id: string, @Req() req: any) { return this.locations.historyForViewer(id, req.user.id); }
}
