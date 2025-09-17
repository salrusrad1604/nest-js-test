import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  });

  if (process.env.NODE_ENV !== 'production') {
    await app.listen(3000);
  } else {
    await app.init();
  }

  return app.getHttpAdapter().getInstance();
}

// Правильный экспорт для Vercel
if (process.env.NODE_ENV === 'production') {
  module.exports = bootstrap();
} else {
  // Для локального запуска
  bootstrap().catch(err => {
    console.error('Error starting application', err);
    process.exit(1);
  });
}
