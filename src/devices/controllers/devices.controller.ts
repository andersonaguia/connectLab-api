import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { DevicesService } from '../services/devices.service';
import { CreateDeviceDTO } from '../dto/create-device.dto';
import { UpdateDeviceDto } from '../dto/update-device.dto';
import { JwtAuthGuard } from 'src/core/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/core/auth/guards/roles/roles.guard';
import { Roles } from 'src/core/auth/guards/decorators/roles.decorator';
import { UserRole } from 'src/users/enum/user.role';
import { deviceLocals } from '../enum/locals.enum';
import { addDeviceLocalDTO } from '../dto/add-device-local.dto';

@Controller()
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) {}
  
  @UseGuards(JwtAuthGuard, RolesGuard)  
  @Roles(UserRole.ADMIN)
  @Post('/devices')
  async createDevice(@Body() device: CreateDeviceDTO) {
    return await this.devicesService.createDevice(device);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)  
  @Roles(UserRole.ADMIN)
  @Post('/devices/locals')
  async createDeviceLocal(@Body() local: addDeviceLocalDTO) {
    return await this.devicesService.createDeviceLocal(local);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/devices')
  async findAllDevices(){
    return this.devicesService.findAllDevices();
  }
}
