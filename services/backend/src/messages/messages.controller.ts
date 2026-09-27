import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { MessageService } from './messages.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('api/v1/messages')
@UseGuards(JwtAuthGuard)
export class MessageController {
  constructor(private readonly messages: MessageService) {}
  @Post('send') send(@Body() body: any, @Req() req: any) { return this.messages.send(req.user.id, body); }
  @Get('inbox') inbox(@Req() req: any) { return this.messages.inbox(req.user.id); }
}
