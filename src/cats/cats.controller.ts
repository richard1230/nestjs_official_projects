/* cats.controller.ts */

import {
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Query,
  Redirect,
  Req,
} from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Get('ab*cd')
  findAll(@Req() request: Request): string {
    return 'This action returns all cats,This route uses a wildcard';
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Post()
  @HttpCode(204)
  @Header('Cache-Control', 'none')
  create(): string {
    return 'add a new cat';
  }

  //   curl http://localhost:3000/cats/8
  //   This action returns a #8 cat%
  @Get(':id')
  findOne(@Param() params): string {
    console.log('I am in cats controlls:this is params.id ' + params.id);
    return `This action returns a #${params.id} cat`;
  }
}
