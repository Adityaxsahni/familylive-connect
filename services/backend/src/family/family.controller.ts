import { Controller, Get, Post, Body, Req } from '@nestjs/common';
import { FamilyService } from './family.service';

@Controller('family')
export class FamilyController {
  constructor(private readonly familyService: FamilyService) {}

  @Post('connections')
  createConnection(@Body() body: { uniqueUserId: string; relationshipLabel: string }, @Req() req) {
    return this.familyService.createConnection(req.user?.id ?? 'anonymous-user', body);
  }

  @Get('connections')
  getConnections(@Req() req) {
    return this.familyService.getConnections(req.user?.id ?? 'anonymous-user');
  }
}
