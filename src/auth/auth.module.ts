import { Module } from '@nestjs/common';
import { SignupService } from './signup/signup.service';
import { LoginService } from './login/login.service';
import { LogoutService } from './logout/logout.service';

@Module({
  providers: [SignupService, LoginService, LogoutService],
  exports: [SignupService, LoginService, LogoutService],
})
export class AuthModule {}
