import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './db/ormconfig';
import { InterviewFePrepController } from './interview-fe-prep/interview-fe-prep.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(dataSourceOptions),
    AuthModule,
  ],
  controllers: [AuthController, InterviewFePrepController],
})
export class AppModule {}
