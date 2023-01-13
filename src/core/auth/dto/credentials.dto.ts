import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";

export class CredentialsDTO {
    @IsString()
    @IsEmail()
    @MaxLength(30)
    email: string;

    @IsString()
    @MinLength(6)
    @MaxLength(20)
    password: string;
}