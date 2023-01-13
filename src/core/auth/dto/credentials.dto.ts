import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CredentialsDTO {
    @IsNotEmpty({ message: 'email cannot be empty' })
    @IsEmail()
    email: string;

    @IsNotEmpty({ message: 'password cannot be empty' })
    @IsString({ message: 'password must be a string' })
    @MinLength(8)
    password: string;
}