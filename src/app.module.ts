import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { databaseProviders } from './core/database/database.providers';
import { userProviders } from './users/users.providers';
import { AuthService } from './core/auth/auth.service';
import { AppController } from './app.controller';
import { JwtStrategy } from './core/auth/guards/strategy/jwt.strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions:{
        expiresIn: 15
      }
    }),
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    UsersModule
  ],
  controllers: [AppController],
  providers: [
    ...databaseProviders,
    ...userProviders,
    AuthService, 
    JwtStrategy   
  ],
})
export class AppModule { }
