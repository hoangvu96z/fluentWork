import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email!: string;

  @IsNotEmpty()
  displayName!: string;

  @IsNotEmpty()
  password!: string;
}
