import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepo: Repository<User>,
  ) {}

  async findAll() {
    return this.usersRepo.find();
  }

  async create(data: Partial<User>) {
    const u = this.usersRepo.create(data as any);
    return this.usersRepo.save(u);
  }
}
