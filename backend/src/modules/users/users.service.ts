import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepo: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepo.find();
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.usersRepo.findOne({ where: { email } });
  }

  async create(data: CreateUserDto): Promise<User> {
    const user = this.usersRepo.create({
      email: data.email,
      displayName: data.displayName,
      password: data.password,
    });

    return this.usersRepo.save(user);
  }
}
