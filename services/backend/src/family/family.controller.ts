import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { FamilyService } from './family.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('api/v1/family')
@UseGuards(JwtAuthGuard)
export class FamilyController {
  constructor(private readonly family: FamilyService) {}
  @Post('connections/request') request(@Body() body: any, @Req() req: any) { return this.family.request(req.user.id, body); }
  @Get('connections') connections(@Req() req: any) { return this.family.listConnections(req.user.id); }
  @Post('circles') circle(@Body() body: any, @Req() req: any) { return this.family.circle(req.user.id, body); }
}
