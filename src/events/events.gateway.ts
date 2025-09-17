import {
  WebSocketGateway,
  SubscribeMessage,
  WebSocketServer,
  OnGatewayDisconnect,
  OnGatewayConnection,
  ConnectedSocket,
  MessageBody,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class EventsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  // Подключение клиента
  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
    this.server.emit('userConnected', { userId: client.id });
  }

  // Отключение клиента
  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
    this.server.emit('userDisconnected', { userId: client.id });
  }

  // Обработка сообщений
  @SubscribeMessage('message')
  handleMessage(@MessageBody() data: any, @ConnectedSocket() client: Socket): void {
    console.log(`Message from ${client.id}:`, data);
    // Отправка сообщения всем клиентам
    this.server.emit('message', {
      userId: client.id,
      message: data.message,
      timestamp: new Date(),
    });
  }

  afterInit(server: Server) {
    console.log('WebSocket сервер инициализирован!!!');
  }
}
