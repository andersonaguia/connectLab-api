import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength } from "class-validator";
import { Match } from "src/core/constraints/match.decorator";


export class ChangePasswordDTO {
    @IsNotEmpty({ message: 'email cannot be empty' })
    @IsString({ message: 'email must be a string' })
    @IsEmail({ message: 'email must be a valid e-mail' })
    @MaxLength(30)
    @ApiProperty({ name: 'email', example: 'fulano@gmail.com', })
    readonly email: string;

    @IsString({ message: 'oldPassword must be a string' })
    @IsNotEmpty({ message: 'oldPassword cannot be empty' })
    @ApiProperty({ name: 'oldPassword', example: '12345aA!', })
    readonly oldPassword: string;

    @IsString({ message: 'newPassword must be a string' })
    @IsNotEmpty({ message: 'newPassword cannot be empty' })
    @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
        message:
            'The newPassword must contain at least 8 characters, including at least one letter, one number and one special character'
    })
    @ApiProperty({ name: 'newPassword', example: '12345aA#!', })
    readonly newPassword: string;

    @IsString({ message: 'newPasswordConfirmation must be a string' })
    @IsNotEmpty({ message: 'newPasswordConfirmation cannot be empty' })
    @Match('newPassword', { message: 'new passwords do not match' })
    @ApiProperty({ name: 'newPasswordConfirmation', example: '12345aA#!', })
    readonly newPasswordConfirmation: string;
}