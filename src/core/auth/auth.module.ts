import { Module } from '@nestjs/common';
import { databaseProviders } from 'src/core/database/database.providers';
import { AuthService } from 'src/core/auth/services/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './controllers/auth.controller';
import { userProviders } from 'src/users/users.providers';
import { JwtStrategy } from './guards/strategy/jwt.strategy';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from 'src/users/users.module';
import { DevicesModule } from 'src/devices/devices.module';

@Module({
    imports: [
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions: {
                expiresIn: 60 * 5 * 6
            }
        }),
        ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
        UsersModule,
        DevicesModule
    ],
    controllers: [AuthController],
    providers: [
        ...databaseProviders,
        ...userProviders,
        JwtStrategy,
        AuthService
    ],
})
export class AuthModule { }