import { Body, Controller, HttpException, HttpStatus, Post, UnprocessableEntityException, ValidationPipe } from "@nestjs/common";
import { AuthService } from "./core/auth/auth.service";
import { CredentialsDTO } from "./core/auth/dto/credentials.dto";
import { NestResponseBuilder } from "./core/http/nest-response-builder";
import { CreateUserDto } from "./users/dto/create-user.dto";

@Controller()
export class AppController {
    constructor(
        private readonly authService: AuthService
    ) { }

    @Post('/auth/signup')
    async signUp(@Body(ValidationPipe) createUserDto: CreateUserDto) {
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

        /*
                if (result.error.code == 23505) {
                    throw new HttpException({ reason: result.error.detail }, HttpStatus.CONFLICT);
                }
                throw new HttpException({ reason: result.error }, HttpStatus.BAD_REQUEST);
        
        
                try {
                     await this.authService.signUp(createUserDto);
                     return {
                         message: 'Successful registration'
                     }
                 } catch (error) {
                     
                 }*/
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
}