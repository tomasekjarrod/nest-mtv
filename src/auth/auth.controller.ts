import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(): Promise<any> {
    return {};
  }

  @Post('logout')
  async logout(): Promise<any> {
    return {};
  }

  @Post('signup')
  async signup(): Promise<any> {
    return {};
  }
}
