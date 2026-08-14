import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { User } from '../users/user.entity';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async login(dto: LoginDto) {
    const user = await this.usersService.findByEmail(dto.email);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const valid = await bcrypt.compare(dto.password, user.password);
    if (!valid) throw new UnauthorizedException('Invalid credentials');

    const token = jwt.sign(
      { sub: user.id, email: user.email },
      process.env.JWT_SECRET || 'dev-secret',
      { expiresIn: '7d' },
    );

    return {
      message: 'Login successful',
      user: { id: user.id, email: user.email, displayName: user.displayName },
      token,
    };
  }

  async register(dto: RegisterDto) {
    const existing = await this.usersService.findByEmail(dto.email);
    if (existing) {
      throw new ConflictException('Email already registered');
    }

    const hashed = await bcrypt.hash(dto.password, 10);
    const created: User = await this.usersService.create({
      email: dto.email,
      displayName: dto.displayName,
      password: hashed,
    });

    const token = jwt.sign(
      { sub: created.id, email: created.email },
      process.env.JWT_SECRET || 'dev-secret',
      { expiresIn: '7d' },
    );

    return {
      message: 'User registered successfully',
      user: { id: created.id, email: created.email, displayName: created.displayName },
      token,
    };
  }
}
