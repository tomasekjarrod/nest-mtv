import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { SkipAuth } from 'src/decorators/skip-auth';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @SkipAuth()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() loginDto: LoginDto): Promise<any> {
    return await this.authService.login(loginDto);
  }

  @Post('logout')
  async logout(): Promise<any> {
    return {};
  }

  @SkipAuth()
  @HttpCode(HttpStatus.OK)
  @Post('signup')
  async signup(@Body() signupDto: SignupDto): Promise<any> {
    return await this.authService.signup(signupDto);
  }
}
