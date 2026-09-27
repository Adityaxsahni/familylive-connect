import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageService {
  private readonly messages = [
    {
      id: 'msg-1',
      threadId: 'thread-1',
      senderId: 'user-1',
      receiverId: 'user-2',
      message: 'Hello family!',
      type: 'text',
      createdAt: new Date().toISOString(),
    },
  ];

  sendMessage(body: { receiverId: string; message: string; type?: string }) {
    return {
      success: true,
      message: {
        id: 'new-msg',
        senderId: 'user-1',
        receiverId: body.receiverId,
        message: body.message,
        type: body.type ?? 'text',
        createdAt: new Date().toISOString(),
      },
    };
  }

  getThreadMessages(threadId: string) {
    return this.messages.filter((message) => message.threadId === threadId);
  }
}
