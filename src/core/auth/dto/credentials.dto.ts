import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CredentialsDTO {
    @IsNotEmpty()
    @IsEmail()
    @ApiProperty({ name: 'email', example: 'fulano@gmail.com', })
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @ApiProperty({ name: 'password', example: '12345aA!', })
    password: string;
}