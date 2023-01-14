import { Body, Controller, HttpStatus, Patch, Post, UseGuards, ValidationPipe } from "@nestjs/common";
import { isNumber } from "class-validator";
import { NestResponseBuilder } from "src/core/http/nest-response-builder";
import { AuthService } from "../services/auth.service";
import { ChangePasswordDTO } from "../dto/change-password.dto";
import { CredentialsDTO } from "../dto/credentials.dto";
import { JwtAuthGuard } from "../guards/jwt-auth.guard";
import { CreateUserDto } from "src/users/dto/create-user.dto";

@Controller()
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) { }

    @Post('/auth/signup')
    async signUp(@Body(ValidationPipe) createUserDto: CreateUserDto) {
        try {
            const result = await this.authService.signUp(createUserDto);
            if (result === null) {
                return new NestResponseBuilder()
                    .withStatus(HttpStatus.UNPROCESSABLE_ENTITY)
                    .withBody({
                        statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
                        message: "Passwords do not match"
                    })
                    .build();
            } else if (result.id) {
                return new NestResponseBuilder()
                    .withStatus(HttpStatus.CREATED)
                    .withBody({
                        statusCode: HttpStatus.CREATED,
                        message: 'Successful registration'
                    })
                    .build();
            }
            return new NestResponseBuilder()
                .withStatus(HttpStatus.BAD_REQUEST)
                .withBody(result)
                .build();
        }
        catch (error) {
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

    }


    @Post('/auth/signin')
    async signIn(
        @Body(ValidationPipe)
        credentialsDto: CredentialsDTO
    ) {
        const result = await this.authService.signIn(credentialsDto);
        if (result === null) {
            return new NestResponseBuilder()
                .withStatus(HttpStatus.UNAUTHORIZED)
                .withBody({
                    statusCode: HttpStatus.UNAUTHORIZED,
                    message: "Incorrect email or password"
                })
                .build();
        } else if (result.token) {
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
}