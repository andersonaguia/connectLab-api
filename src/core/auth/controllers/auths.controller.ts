import { Body, Controller, HttpStatus, Patch, UseGuards } from "@nestjs/common";
import { isNumber } from "class-validator";
import { NestResponseBuilder } from "src/core/http/nest-response-builder";
import { AuthService } from "../auth.service";
import { ChangePasswordDTO } from "../dto/change-password.dto";
import { JwtAuthGuard } from "../guards/jwt-auth.guard";

@Controller()
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        //private readonly usersService: UsersService
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
}