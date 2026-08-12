import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get(':roomId')
  async getHistory(@Param('roomId') roomId: string) {
    return this.chatService.findByRoom(roomId);
  }

  @Post()
  async createMessage(@Body() body: { roomId: string; sender: string; content: string; isSystem?: boolean }) {
    return this.chatService.createMessage(body);
  }
}
