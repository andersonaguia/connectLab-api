import { Module } from '@nestjs/common';
import { DevicesService } from './services/devices.service';
import { DevicesController } from './controllers/devices.controller';

@Module({
  controllers: [DevicesController],
  providers: [DevicesService]
})
export class DevicesModule {}
