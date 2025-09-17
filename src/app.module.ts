import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsController } from './posts/posts.controller';
import { EventsGateway } from './events/events.gateway';

@Module({
  imports: [],
  controllers: [AppController, PostsController],
  providers: [AppService, EventsGateway],
})
export class AppModule {}
