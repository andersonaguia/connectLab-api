import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UsersController } from './controllers/users.controller';
import { userProviders } from './users.providers';
import { databaseProviders } from 'src/core/database/database.providers';
import { AuthService } from 'src/core/auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { deviceProviders } from 'src/devices/devices.providers';
@Module({
  controllers: [UsersController],
  providers: [
    ...databaseProviders,
    ...userProviders,
    ...deviceProviders,
    JwtService,
    UsersService,
    AuthService
  ]
})
export class UsersModule {}
