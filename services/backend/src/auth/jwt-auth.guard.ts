import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly auth: AuthService) {}
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const header = request.headers.authorization as string | undefined;
    if (!header?.startsWith('Bearer ')) throw new UnauthorizedException('Bearer token required');
    try {
      const payload = this.auth.verifyAccessToken(header.slice(7));
      const user = this.auth.findById(payload.sub);
      if (!user) throw new UnauthorizedException('User not found');
      request.user = { id: user.id, uniqueUserId: user.uniqueUserId, email: user.email, name: user.name };
      return true;
    } catch { throw new UnauthorizedException('Invalid or expired access token'); }
  }
}
