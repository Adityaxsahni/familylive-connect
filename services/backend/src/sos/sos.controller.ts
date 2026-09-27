import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { SosService } from './sos.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('api/v1/sos')
@UseGuards(JwtAuthGuard)
export class SosController {
  constructor(private readonly sos: SosService) {}
  @Post('trigger') trigger(@Body() body: any, @Req() req: any) { return this.sos.trigger(req.user.id, body); }
  @Post('cancel') cancel(@Req() req: any) { return this.sos.cancel(req.user.id); }
  @Get('status') status(@Req() req: any) { return this.sos.status(req.user.id); }
}
