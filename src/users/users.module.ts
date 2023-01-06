import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UsersController } from './controllers/users.controller';
import { userProviders } from './users.providers';
import { databaseProviders } from 'src/core/database/database.providers';
import { AuthService } from 'src/core/auth/auth.service';
import { JwtService } from '@nestjs/jwt';
@Module({
  controllers: [UsersController],
  providers: [
    ...databaseProviders,
    ...userProviders,
    JwtService,
    UsersService,
    AuthService
  ]
})
export class UsersModule {}
