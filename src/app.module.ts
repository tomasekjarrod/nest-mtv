import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT || ''),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: ['**/*.entity{.ts,.js}'],
      migrationsTableName: 'migration',
      migrations: ['src/migration/*.ts'],
      synchronize: true, // Set this to false in production
    }),
    AuthModule,
  ],
  controllers: [AuthController],
})
export class AppModule {}
