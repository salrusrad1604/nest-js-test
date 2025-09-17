// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(process.env.PORT ?? 3000);

//   app.enableCors({
//     origin: ['http://localhost:3000'],
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
//     allowedHeaders: [
//       'Content-Type',
//       'Authorization',
//       'X-Requested-With',
//       'Accept',
//       'Origin',
//       'Access-Control-Request-Method',
//       'Access-Control-Request-Headers',
//     ],
//     exposedHeaders: ['Authorization', 'Content-Length'],
//     credentials: true,
//     maxAge: 86400, // 24 часа
//     preflightContinue: false,
//     optionsSuccessStatus: 204,
//   });
// }
// bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: true,
    credentials: true,
  });

  if (module['hot']) {
    module['hot'].accept();
    module['hot'].dispose(() => app.close());
  }

  // Для Vercel используем порт из env или 3000
  const port = process.env.PORT || 3000;
  await app.listen(port);

  console.log(`Server running on port ${port}`);

  return app;
}

// Запуск для Vercel
export default bootstrap().then(app => app.getHttpAdapter().getInstance());
