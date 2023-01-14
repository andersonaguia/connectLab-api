import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { DevicesModule } from './devices/devices.module';
import { TransformResponseInterceptor } from './core/http/transform-response-interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AuthModule } from './core/auth/auth.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    DevicesModule    
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformResponseInterceptor,
    }
  ]
})
export class AppModule { }
