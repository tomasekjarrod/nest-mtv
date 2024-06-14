import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth.controller';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule],
  controllers: [AuthController],
})
export class AppModule {}
