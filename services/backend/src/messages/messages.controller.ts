import { Controller, Get, Post, Body } from '@nestjs/common';
import { MessageService } from './messages.service';

@Controller('messages')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post('send')
  sendMessage(@Body() body: { receiverId: string; message: string; type?: string }) {
    return this.messageService.sendMessage(body);
  }

  @Get('threads/:threadId')
  getThreadMessages(threadId: string) {
    return this.messageService.getThreadMessages(threadId);
  }
}
