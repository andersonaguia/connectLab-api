import {
    IsNotEmpty,
    IsNumber,
    IsString,
    MinLength,
} from 'class-validator';

export class UserAddressDTO {
    @IsString({ message: 'zipCode must be a string' })
    @MinLength(8, { message: 'zipCode must contain 8 characters'})
    @IsNotEmpty({ message: 'zipCode cannot be empty' })
    readonly zipCode: string;

    @IsString({ message: 'street must be a string' })
    @IsNotEmpty({ message: 'street cannot be empty' })
    readonly street: string;

    @IsNumber({}, { message: 'number must be a number' })
    @IsNotEmpty({ message: 'number cannot be empty' })
    readonly number: number;

    @IsNotEmpty({ message: 'neighborhood cannot be empty' })
    @IsString({ message: 'neighborhood must be a string' })
    readonly neighborhood: string;

    @IsNotEmpty({ message: 'city cannot be empty' })
    @IsString({ message: 'city must be a string' })
    readonly city: string;

    @IsNotEmpty({ message: 'state cannot be empty' })
    @IsString({ message: 'state must be a string' })
    readonly state: string;

    @IsString({ message: 'string must be a string' })
    readonly complement: string;
}