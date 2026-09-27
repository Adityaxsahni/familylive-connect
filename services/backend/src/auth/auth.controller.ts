import { Body, Controller, Post } from '@nestjs/common';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { AuthService } from './auth.service';

class CredentialsDto { @IsEmail() email!: string; @IsNotEmpty() @MinLength(8) password!: string; }
class RegisterDto extends CredentialsDto { @IsNotEmpty() name!: string; }

@Controller('api/v1/auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}
  @Post('register') register(@Body() dto: RegisterDto) { return this.auth.register(dto); }
  @Post('login') login(@Body() dto: CredentialsDto) { return this.auth.login(dto); }
}
