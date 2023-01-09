import { Module } from '@nestjs/common';
import { DevicesService } from './services/devices.service';
import { DevicesController } from './controllers/devices.controller';
import { deviceProviders } from './devices.providers';
import { databaseProviders } from 'src/core/database/database.providers';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [DevicesController],
  providers: [
    ...databaseProviders,
    ...deviceProviders,
    JwtService,
    DevicesService
  ]
})
export class DevicesModule {}
