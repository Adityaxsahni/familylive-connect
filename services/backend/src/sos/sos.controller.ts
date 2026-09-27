import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { SosService } from './sos.service';

@Controller('sos')
export class SosController {
  constructor(private readonly sosService: SosService) {}

  @Post('trigger')
  trigger(@Body() body: { userId: string; latitude: number; longitude: number; message?: string }) {
    return this.sosService.trigger(body);
  }

  @Get('status/:userId')
  getStatus(@Param('userId') userId: string) {
    return this.sosService.getStatus(userId);
  }
}
