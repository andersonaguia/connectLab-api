import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, Query, HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import { AuthService } from 'src/core/auth/auth.service';
import { UsersService } from '../services/users.service';
import { JwtAuthGuard } from 'src/core/auth/guards/jwt-auth.guard';
import { ChangePasswordDTO } from 'src/core/auth/dto/change-password.dto';
import { addDeviceToUserDTO } from '../dto/add-device-to-user.dto';
import { NestResponseBuilder } from 'src/core/http/nest-response-builder';
import { UserDevicesEntity } from '../entities/user-devices.entity';
import { isArray, isNumber } from 'class-validator';

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
    async findUserDeviceById(@Param('id') deviceId: number, @Request() req) {
        const result = await this.usersService.findUserDeviceById(+deviceId, req);
        if (result === null) {
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'Device is not found',
            });
        } else if (result.id) {
            return new NestResponseBuilder()
                .withStatus(HttpStatus.OK)
                .withBody(result)
                .build();
        }
        return new NestResponseBuilder()
            .withStatus(HttpStatus.BAD_REQUEST)
            .withBody(result)
            .build();
    }

    @UseGuards(JwtAuthGuard)
    @Get('/users/alldevices')
    async findAllUserDevices(
        @Request() req,
        @Query('page') page: number = 1,
        @Query('limit') limit: number = 50,
        @Query('local') local: number = null) {
        const result = await this.usersService.findAllUserDevices(req, page, limit, local);

        if (isArray(result)) {
            return new NestResponseBuilder()
                .withStatus(HttpStatus.OK)
                .withBody(result)
                .build();
        }
        return new NestResponseBuilder()
            .withStatus(HttpStatus.BAD_REQUEST)
            .withBody(result)
            .build();
    }

    @UseGuards(JwtAuthGuard)
    @Post('/users/adddevice')
    async addDeviceToUser(@Body() deviceData: addDeviceToUserDTO, @Request() req: any) {
        const result: UserDevicesEntity = await this.usersService.addDeviceToUser(deviceData, req);
        if (result === null) {
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'deviceId is not found',
            });
        } else if (result.id) {
            return new NestResponseBuilder()
                .withStatus(HttpStatus.OK)
                .withHeaders({ Location: `users/devicedetails/${result.id}` })
                .withBody("Successfully registered device")
                .build();
        }
        return new NestResponseBuilder()
            .withStatus(HttpStatus.BAD_REQUEST)
            .withBody(result)
            .build();
    }

    @UseGuards(JwtAuthGuard)
    @Get('/users/profile')
    async findUser(@Request() req: any) {
        const result = await this.usersService.findUser(req);
        if (result === null) {
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'User is not found',
            });
        } else if (result.id) {
            return new NestResponseBuilder()
                .withStatus(HttpStatus.OK)
                .withBody(result)
                .build();
        }
        return new NestResponseBuilder()
            .withStatus(HttpStatus.BAD_REQUEST)
            .withBody(result)
            .build();
    }

    @UseGuards(JwtAuthGuard)
    @Delete('/users/delete/:id')
    async removeUserDevice(@Param('id') id: number, @Request() req: any) {
        const result = await this.usersService.removeUserDevice(+id, req);
        if (isNumber(result)) {
            if (result === 0) {
                return new NestResponseBuilder()
                    .withStatus(HttpStatus.NOT_FOUND)
                    .withBody({
                        code: 20000,
                        detail: "This id is not present in the database"
                    })
                    .build();
            } else {
                return new NestResponseBuilder()
                    .withStatus(HttpStatus.OK)
                    .withBody("Device removed successfully")
                    .build();
            }
        }
        return new NestResponseBuilder()
            .withStatus(HttpStatus.BAD_REQUEST)
            .withBody(result)
            .build();
    }
}