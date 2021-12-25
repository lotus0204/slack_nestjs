import { Controller, Get, Post, Query, Param, Body } from '@nestjs/common';

@Controller('api/workspaces/:url/channels')
export class ChannelsController {
  @Get()
  getAllChannels() { }
  
  @Post()
  createChannels() { }

  @Get()
  getSpecificChannels(){}

  @Get(':name/chats')
  getChats(@Query() query, @Param() param) {
    console.log(query.perPage, query.page);
    console.log(param.id, param.url);
    // [@Query('perPage') perPage] 와 같이 쿼리 안에 속성을 넣어줘서 받을 수 있다. 
  }

  @Post(':name/chats')
  postChat(@Body() content) {
    
  }

  

}
