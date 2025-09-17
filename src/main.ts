import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Включите CORS
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  });

  await app.init();

  console.log('NestJS app initialized on Vercel');
  return app.getHttpAdapter().getInstance();
}

// Правильный экспорт для Vercel
module.exports = bootstrap();
