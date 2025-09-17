import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return {
      message: 'Hello from NestJS on Vercel!',
      status: 'OK',
      timestamp: new Date().toISOString(),
    };
  }
}
