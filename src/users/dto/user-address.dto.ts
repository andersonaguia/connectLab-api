import { ApiProperty } from '@nestjs/swagger';
import {
    IsNotEmpty,
    IsNumber,
    IsString,
    MinLength,
} from 'class-validator';

export class UserAddressDTO {
    @IsString({ message: 'zipCode must be a string' })
    @MinLength(8, { message: 'zipCode must contain 8 characters' })
    @IsNotEmpty({ message: 'zipCode cannot be empty' })
    @ApiProperty({ name: 'zipCode', example: '59000-000', })
    readonly zipCode: string;

    @IsString({ message: 'street must be a string' })
    @IsNotEmpty({ message: 'street cannot be empty' })
    @ApiProperty({ name: 'street', example: 'Rua JavaScript', })
    readonly street: string;

    @IsNumber({}, { message: 'number must be a number' })
    @IsNotEmpty({ message: 'number cannot be empty' })
    @ApiProperty({ name: 'number', example: 10, })
    readonly number: number;

    @IsNotEmpty({ message: 'neighborhood cannot be empty' })
    @IsString({ message: 'neighborhood must be a string' })
    @ApiProperty({ name: 'neighborhood', example: 'Centro', })
    readonly neighborhood: string;

    @IsNotEmpty({ message: 'city cannot be empty' })
    @IsString({ message: 'city must be a string' })
    @ApiProperty({ name: 'city', example: 'São Paulo', })
    readonly city: string;

    @IsNotEmpty({ message: 'state cannot be empty' })
    @IsString({ message: 'state must be a string' })
    @ApiProperty({ name: 'state', example: 'SP', })
    readonly state: string;

    @IsString({ message: 'complement must be a string' })
    @ApiProperty({ name: 'complement', example: 'Bloco A, AP 302', required: false })
    readonly complement: string;
}