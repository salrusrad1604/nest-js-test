import { Controller, Get, HttpCode, HttpStatus, Param, Post, Req } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Post()
  create(): string {
    return 'Новый пост';
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  getAllPosts(@Req() req: Request): string {
    return 'Все посты';
  }

  @Get(':id')
  getPostById(@Param() params: Record<string, string>): any {
    return { data: 'Пост с идентификатором ${params.id}' };
  }
}
