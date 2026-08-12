import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ChatMessage, ChatMessageDocument } from './chat.schema';

@Injectable()
export class ChatService {
  constructor(
    @InjectModel(ChatMessage.name)
    private chatModel: Model<ChatMessageDocument>,
  ) {}

  async createMessage(data: Partial<ChatMessage>) {
    const message = new this.chatModel(data);
    return message.save();
  }

  async findByRoom(roomId: string) {
    return this.chatModel.find({ roomId }).sort({ createdAt: 1 }).exec();
  }
}
