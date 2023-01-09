import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { DevicesService } from '../services/devices.service';
import { CreateDeviceDTO } from '../dto/create-device.dto';
import { UpdateDeviceDto } from '../dto/update-device.dto';
import { JwtAuthGuard } from 'src/core/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/core/auth/guards/roles/roles.guard';
import { Roles } from 'src/core/auth/guards/decorators/roles.decorator';
import { UserRole } from 'src/users/enum/user.role';

@Controller('devices')
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) {}
  
  @UseGuards(JwtAuthGuard, RolesGuard)  
  @Roles(UserRole.ADMIN)
  @Post()
  create(@Body() device: CreateDeviceDTO) {
    return this.devicesService.create(device);
  }

  @Get()
  findAll() {
    return this.devicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.devicesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeviceDto: UpdateDeviceDto) {
    return this.devicesService.update(+id, updateDeviceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.devicesService.remove(+id);
  }
}
