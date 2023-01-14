import { Module } from '@nestjs/common';
import { databaseProviders } from 'src/core/database/database.providers';
import { AuthService } from 'src/core/auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { AuthController } from './controllers/auths.controller';
import { userProviders } from 'src/users/users.providers';

@Module({
  controllers: [AuthController],
  providers: [
    ...databaseProviders,
    ...userProviders,
    JwtService,
    AuthService
  ]
})
export class AuthModule {}