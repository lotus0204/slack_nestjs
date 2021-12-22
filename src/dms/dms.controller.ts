import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { query } from 'express';

@Controller('api/workspaces/:url/dms')
export class DmsController {
  @Get(':id/chats')
  getChat(@Query() query, @Param() param) {
    console.log(query.perPage, query.page);
    console.log(param.id, param.url);
    // [@Query('perPage') perPage] 와 같이 쿼리 안에 속성을 넣어줘서 받을 수 있다. 
  }

  @Post(':id/chats')
  postChat(@Body() content) {
    
  }
}
