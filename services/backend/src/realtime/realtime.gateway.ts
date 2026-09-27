import { WebSocketGateway, SubscribeMessage, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
@WebSocketGateway({ cors: { origin: true } })
export class RealtimeGateway {
  @WebSocketServer() server!: Server;
  @SubscribeMessage('location:update') location(_client: any, payload: any) { this.server.emit('location:updated', payload); }
  @SubscribeMessage('message:send') message(_client: any, payload: any) { this.server.emit('message:received', payload); }
  @SubscribeMessage('sos:trigger') sos(_client: any, payload: any) { this.server.emit('sos:alert', payload); }
}
