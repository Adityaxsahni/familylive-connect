import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { FamilyService } from './family.service';

@Controller('api/v1/family')
export class FamilyController {
  constructor(private readonly family: FamilyService) {}
  @Post('connections/request') request(@Body() body: any, @Req() req: any) { return this.family.request(req.user?.id ?? 'demo-user', body); }
  @Get('connections') connections(@Req() req: any) { return this.family.connections(req.user?.id ?? 'demo-user'); }
  @Post('circles') circle(@Body() body: any, @Req() req: any) { return this.family.circle(req.user?.id ?? 'demo-user', body); }
}
