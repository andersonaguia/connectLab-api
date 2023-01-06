import { Body, Controller, HttpException, HttpStatus, Post, ValidationPipe } from "@nestjs/common";
import { AuthService } from "./core/auth/auth.service";
import { CredentialsDTO } from "./core/auth/dto/credentials.dto";
import { CreateUserDto } from "./users/dto/create-user.dto";

@Controller()
export class AppController {
    constructor(
        private readonly authService: AuthService
    ) { }

    @Post('/auth/signup')
    async signUp(@Body(ValidationPipe) createUserDto: CreateUserDto) {
        try{
            await this.authService.signUp(createUserDto);
            return {
                message: 'Successful registration'
            }
        }catch(error){
            if (error.code == 23505){
                throw new HttpException({ reason: error.detail }, HttpStatus.CONFLICT);
            }                 
            throw new HttpException({ reason: error }, HttpStatus.BAD_REQUEST);
        }        
    }

    @Post('/auth/signin')
    async signIn(@Body(ValidationPipe) credentialsDto: CredentialsDTO
    ) {
      return await this.authService.signIn(credentialsDto);
    }
}