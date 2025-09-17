import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello() {
    return {
      message: 'Hello from NestJS on Vercel!',
      status: 'OK',
      timestamp: new Date().toISOString(),
    };
  }
}
