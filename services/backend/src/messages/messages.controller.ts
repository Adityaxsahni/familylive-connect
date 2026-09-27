import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { MessageService } from './messages.service';
@Controller('api/v1/messages')
export class MessageController {
  constructor(private readonly messages: MessageService) {}
  @Post('send') send(@Body() body: any, @Req() req: any) { return this.messages.send(req.user?.id ?? 'demo-user', body); }
  @Get('inbox') inbox(@Req() req: any) { return this.messages.inbox(req.user?.id ?? 'demo-user'); }
}
