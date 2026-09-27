import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { SosService } from './sos.service';
@Controller('api/v1/sos')
export class SosController {
  constructor(private readonly sos: SosService) {}
  @Post('trigger') trigger(@Body() body: any, @Req() req: any) { return this.sos.trigger(req.user?.id ?? 'demo-user', body); }
  @Post('cancel') cancel(@Req() req: any) { return this.sos.cancel(req.user?.id ?? 'demo-user'); }
  @Get('status') status(@Req() req: any) { return this.sos.status(req.user?.id ?? 'demo-user'); }
}
