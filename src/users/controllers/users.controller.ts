import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, Query } from '@nestjs/common';
import { AuthService } from 'src/core/auth/auth.service';
import { UsersService } from '../services/users.service';
import { JwtAuthGuard } from 'src/core/auth/guards/jwt-auth.guard';
import { ChangePasswordDTO } from 'src/core/auth/dto/change-password.dto';
import { addDeviceToUserDTO } from '../dto/add-device-to-user.dto';

@Controller()
export class UsersController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService
  ) { }

  @UseGuards(JwtAuthGuard)
  @Patch('/users/changepassword')
  async changePassword(@Body() data: ChangePasswordDTO) {
    return await this.authService.changePassword(data);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/users/devicedetails/:id')
  async findUserDeviceDetail(@Param('id') deviceId: number, @Request() req) {
    return await this.usersService.findUserDeviceDetail(+deviceId, req);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/users/devices/all')
  async findAllUserDevices(
    @Request() req,
    @Query('page') page = 1,
    @Query('limit') limit = 10,
    @Query('local') local: number) {
    return this.usersService.findAllUserDevices(req, page, limit, local);
  }


  @UseGuards(JwtAuthGuard)
  @Post('/users/add/device')
  async addDeviceToUser(@Body() deviceData: addDeviceToUserDTO, @Request() req) {
    return await this.usersService.addDeviceToUser(deviceData, req);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/users/profile')
  findUser(@Request() req) {
    return this.usersService.findUser(req);
  }


  /*
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
      return this.usersService.update(+id, updateUserDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.usersService.remove(+id);
    }
    */
}
