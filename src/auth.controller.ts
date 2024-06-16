import { Controller, Post } from '@nestjs/common';
import { LoginService } from './auth/login/login.service';
import { LogoutService } from './auth/logout/logout.service';
import { SignupService } from './auth/signup/signup.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly loginService: LoginService,
    private readonly logoutService: LogoutService,
    private readonly signupService: SignupService,
  ) {}

  @Post('login')
  async login(): Promise<any> {
    return 'login'
  }

  @Post('logout')
  async logout(): Promise<any> {
    return 'logout'
  }

  @Post('signup')
  async signup(): Promise<any> {
    return 'signup'
  }
}
