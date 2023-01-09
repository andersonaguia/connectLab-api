import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { databaseProviders } from './core/database/database.providers';
import { userProviders } from './users/users.providers';
import { AuthService } from './core/auth/auth.service';
import { AppController } from './app.controller';
import { JwtStrategy } from './core/auth/guards/strategy/jwt.strategy';
import { DevicesModule } from './devices/devices.module';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions:{
        expiresIn: 60 * 5 * 6
      }
    }),
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    UsersModule,
    DevicesModule
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
