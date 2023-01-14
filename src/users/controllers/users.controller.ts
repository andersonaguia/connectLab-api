import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, Query, HttpStatus } from '@nestjs/common';
import { AuthService } from 'src/core/auth/auth.service';
import { UsersService } from '../services/users.service';
import { JwtAuthGuard } from 'src/core/auth/guards/jwt-auth.guard';
import { ChangePasswordDTO } from 'src/core/auth/dto/change-password.dto';
import { addDeviceToUserDTO } from '../dto/add-device-to-user.dto';
import { NestResponseBuilder } from 'src/core/http/nest-response-builder';
import { isArray, isNumber } from 'class-validator';
import { UpdateUserDeviceDTO } from '../dto/update-user-device.dto';
import { DeviceDataDTO } from '../dto/device-data.dto';

@Controller()
export class UsersController {
    constructor(
        private readonly authService: AuthService,
        private readonly usersService: UsersService
    ) { }

    @UseGuards(JwtAuthGuard)
    @Patch('/auth/changepassword')
    async changePassword(@Body() data: ChangePasswordDTO) {
        const result = await this.authService.changePassword(data);
        if (result === null) {
            return new NestResponseBuilder()
                .withStatus(HttpStatus.UNAUTHORIZED)
                .withBody({
                    statusCode: HttpStatus.UNAUTHORIZED,
                    message: "Incorrect email or oldPassword"
                })
                .build();
        } else if (isNumber(result)) {
            if (result > 0) {
                return new NestResponseBuilder()
                    .withStatus(HttpStatus.OK)
                    .withBody("Password changed successfully")
                    .build();
            } else {
                return new NestResponseBuilder()
                    .withStatus(HttpStatus.NOT_FOUND)
                    .withBody({
                        code: 20000,
                        detail: 'This id not found or unable to update'
                    })
                    .build();
            }
        }
        return new NestResponseBuilder()
            .withStatus(HttpStatus.BAD_REQUEST)
            .withBody(result)
            .build();
    }

    @UseGuards(JwtAuthGuard)
    @Get('/users/devicedetails/:id')
    async findUserDeviceById(@Param('id') deviceId: number, @Request() req: any) {
        const result = await this.usersService.findUserDeviceById(+deviceId, req);
        if (result === null) {
            return new NestResponseBuilder()
                .withStatus(HttpStatus.NOT_FOUND)
                .withBody({
                    statusCode: HttpStatus.NOT_FOUND,
                    message: "Device is not found"
                })
                .build();
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
        const result = await this.usersService.addDeviceToUser(deviceData, req);
        if (result === null) {
            return new NestResponseBuilder()
                .withStatus(HttpStatus.NOT_FOUND)
                .withBody({
                    statusCode: HttpStatus.NOT_FOUND,
                    message: "deviceId is not found"
                })
                .build();
        } else if (result.id) {
            return new NestResponseBuilder()
                .withStatus(HttpStatus.CREATED)
                .withHeaders({ Location: `users/devicedetails/${result.id}` })
                .withBody("Successfully registered device")
                .build();
        } else if (result === undefined) {
            return new NestResponseBuilder()
                .withStatus(HttpStatus.BAD_REQUEST)
                .withBody("Invalid local")
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
            return new NestResponseBuilder()
                .withStatus(HttpStatus.NOT_FOUND)
                .withBody({
                    statusCode: HttpStatus.NOT_FOUND,
                    message: "User is not found"
                })
                .build();
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
                        statusCode: HttpStatus.NOT_FOUND,
                        message: "deviceId is not found",
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

    @UseGuards(JwtAuthGuard)
    @Patch('/users/updatestatusdevice')
    async updateDeviceStatus(@Body() deviceData: DeviceDataDTO, @Request() req: any) {
        const result = await this.usersService.updateDeviceStatus(deviceData, req);
        
        if (isNumber(result)) {
            if (result > 0) {
                return new NestResponseBuilder()
                    .withStatus(HttpStatus.OK)
                    .withBody("Device status updated successfully")
                    .build();
            } else {
                return new NestResponseBuilder()
                    .withStatus(HttpStatus.NOT_FOUND)
                    .withBody({
                        code: 20000,
                        detail: 'This deviceId not found or unable to update'
                    })
                    .build();
            }
        }
        return new NestResponseBuilder()
            .withStatus(HttpStatus.BAD_REQUEST)
            .withBody(result)
            .build();
    }
}