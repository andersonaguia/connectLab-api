import { Body, Controller, Post, ValidationPipe } from "@nestjs/common";
import { AuthService } from "./core/auth/auth.service";
import { CreateUserDto } from "./users/dto/create-user.dto";

@Controller()
export class AppController {
    constructor(
        private readonly authService: AuthService
    ) { }

    @Post('/auth/signup')
    async signUp(@Body(ValidationPipe) createUserDto: CreateUserDto) {
        return await this.authService.signUp(createUserDto);
        /*return {
            message: 'Successful registration'
        }*/
    }
}