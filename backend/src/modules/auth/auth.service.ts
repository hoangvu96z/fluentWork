import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  async login(dto: LoginDto) {
    return {
      message: 'Login successful',
      user: {
        id: 'demo-user-id',
        email: dto.email,
        displayName: dto.email.split('@')[0],
      },
    };
  }

  async register(dto: RegisterDto) {
    return {
      message: 'User registered successfully',
      user: {
        id: 'demo-user-id',
        email: dto.email,
        displayName: dto.displayName,
      },
    };
  }
}
