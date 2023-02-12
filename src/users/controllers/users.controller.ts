import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, Query, HttpStatus } from '@nestjs/common';
import { AuthService } from 'src/core/auth/services/auth.service';
import { UsersService } from '../services/users.service';
import { JwtAuthGuard } from 'src/core/auth/guards/jwt-auth.guard';
import { addDeviceToUserDTO } from '../dto/add-device-to-user.dto';
import { NestResponseBuilder } from 'src/core/http/nest-response-builder';
import { isArray, isNumber } from 'class-validator';
import { DeviceDataDTO } from '../dto/device-data.dto';
import { ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller()
export class UsersController {
    constructor(
        private readonly authService: AuthService,
        private readonly usersService: UsersService
    ) { }

    @UseGuards(JwtAuthGuard)
    @ApiParam({
        name: 'id',
        type: String,
    })
    @Get('/users/devicedetails/:id')
    @ApiResponse({
        status: 200,
        description: 'Operação realizada com sucesso.'
    })
    @ApiResponse({
        status: 400,
        description: 'Bad request'
    })
    @ApiResponse({
        status: 404,
        description: 'Not found'
    })
    async findUserDeviceById(@Param('id') deviceId: number, @Request() req: any) {
        try {
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
        } catch (error) {
            return new NestResponseBuilder()
                .withStatus(HttpStatus.BAD_REQUEST)
                .withBody(error)
                .build();
        }
    }

    @UseGuards(JwtAuthGuard)
    @Get('/users/alldevices')
    @ApiResponse({
        status: 200,
        description: 'Operação realizada com sucesso.'
    })
    @ApiResponse({
        status: 400,
        description: 'Bad request'
    })
    async findAllUserDevices(
        @Request() req,
        @Query('page') page: number = 1,
        @Query('limit') limit: number = 50,
        @Query('local') local: number = null) {
        try {
            const result = await this.usersService.findAllUserDevices(req, page, limit, local);

            if (isArray(result)) {
                return new NestResponseBuilder()
                    .withStatus(HttpStatus.OK)
                    .withBody(result)
                    .build();
            }
        } catch (error) {
            return new NestResponseBuilder()
                .withStatus(HttpStatus.BAD_REQUEST)
                .withBody(error)
                .build();
        }
    }

    @UseGuards(JwtAuthGuard)
    @Post('/users/adddevice')
    @ApiResponse({
        status: 201,
        description: 'Operação realizada com sucesso.'
    })
    @ApiResponse({
        status: 400,
        description: 'Bad request'
    })
    @ApiResponse({
        status: 404,
        description: 'Not found'
    })
    async addDeviceToUser(@Body() deviceData: addDeviceToUserDTO, @Request() req: any) {
        try {
            const result = await this.usersService.addDeviceToUser(deviceData, req);
            if (result === null) {
                return new NestResponseBuilder()
                    .withStatus(HttpStatus.NOT_FOUND)
                    .withBody({
                        statusCode: HttpStatus.NOT_FOUND,
                        message: "deviceId is not found or invalid local"
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
    @Get('/users/profile')
    @ApiResponse({
        status: 200,
        description: 'Operação realizada com sucesso.'
    })
    @ApiResponse({
        status: 400,
        description: 'Bad request'
    })
    @ApiResponse({
        status: 404,
        description: 'Not found'
    })
    async findUser(@Request() req: any) {
        try {

            const result = await this.usersService.findUser(req);

            if (result === null) {
                return new NestResponseBuilder()
                    .withStatus(HttpStatus.NOT_FOUND)
                    .withBody({
                        statusCode: HttpStatus.NOT_FOUND,
                        message: "User is not found"
                    })
                    .build();
            }
            return new NestResponseBuilder()
                .withStatus(HttpStatus.OK)
                .withBody(result)
                .build();
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
    @Delete('/users/delete/:id')
    @ApiQuery({
        name: 'id',
        type: String,
    })
    @ApiResponse({
        status: 200,
        description: 'Operação realizada com sucesso.'
    })
    @ApiResponse({
        status: 400,
        description: 'Bad request'
    })
    @ApiResponse({
        status: 404,
        description: 'Not found'
    })
    async removeUserDevice(@Param('id') id: number, @Request() req: any) {
        try {
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
    @Patch('/users/updatestatusdevice')
    @ApiResponse({
        status: 200,
        description: 'Operação realizada com sucesso.'
    })
    @ApiResponse({
        status: 400,
        description: 'Bad request'
    })
    @ApiResponse({
        status: 404,
        description: 'Not found'
    })
    async updateDeviceStatus(@Body() deviceData: DeviceDataDTO, @Request() req: any) {
        try {
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