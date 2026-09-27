import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() dto: LoginDto) {
    const user = await this.authService.validateUser(dto.email, dto.password);

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const accessToken = this.authService.signAccessToken(user);
    const refreshToken = this.authService.signRefreshToken(user);

    return {
      user: {
        id: user.id,
        uniqueUserId: user.uniqueUserId,
        name: user.name,
        email: user.email,
      },
      accessToken,
      refreshToken,
    };
  }
}
