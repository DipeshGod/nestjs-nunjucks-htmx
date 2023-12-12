import { Controller, Get, Post, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  home(): string {
    return this.appService.getHello();
  }

  @Post('demo')
  @Render('demo/demo')
  demo() {
    return {
      id: Math.random() * 100,
    };
  }
}
