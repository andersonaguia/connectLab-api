import { Controller, Get, Post, Body, UseGuards, HttpStatus } from '@nestjs/common';
import { DevicesService } from '../services/devices.service';
import { CreateDeviceDTO } from '../dto/create-device.dto';
import { JwtAuthGuard } from 'src/core/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/core/auth/guards/roles/roles.guard';
import { Roles } from 'src/core/auth/guards/decorators/roles.decorator';
import { UserRole } from 'src/users/enum/user.role';
import { addDeviceLocalDTO } from '../dto/add-device-local.dto';
import { NestResponseBuilder } from 'src/core/http/nest-response-builder';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('devices')
@Controller()
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) { }

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
    try {
      const result = await this.devicesService.createDeviceLocal(local);

      if (result) {
        return new NestResponseBuilder()
          .withStatus(HttpStatus.CREATED)
          .withBody({
            statusCode: HttpStatus.CREATED,
            message: 'Successful registration'
          })
          .build();
      }
    } catch (error) {
      if (error.code === "23505") {
        if (error.code === "23505") {
          return new NestResponseBuilder()
            .withStatus(HttpStatus.CONFLICT)
            .withBody({
              code: error.code,
              detail: error.detail
            })
            .build();
        }
      }
      return new NestResponseBuilder()
        .withStatus(HttpStatus.BAD_REQUEST)
        .withBody({
          code: error.code,
          detail: error.detail
        })
        .build();
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('/devices/all')
  async findAllDevices() {
    try {
      const result = await this.devicesService.findAllDevices();
      if (result) {
        return new NestResponseBuilder()
          .withStatus(HttpStatus.OK)
          .withBody(result)
          .build();
      }
    } catch (error) {
      return new NestResponseBuilder()
        .withStatus(HttpStatus.BAD_REQUEST)
        .withBody({
          code: error.code,
          detail: error.detail
        })
        .build();
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('/devices/alllocals')
  async findAllLocals() {
    try {
      const result = await this.devicesService.findAllLocals();
      if (result) {
        return new NestResponseBuilder()
          .withStatus(HttpStatus.OK)
          .withBody(result)
          .build();
      }
    } catch (error) {
      return new NestResponseBuilder()
        .withStatus(HttpStatus.BAD_REQUEST)
        .withBody({
          code: error.code,
          detail: error.detail
        })
        .build();
    }
  }
}
