import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsObject,
  IsString,
  Matches,
  ValidateNested,
} from 'class-validator';
import { Match } from 'src/core/constraints/match.decorator';
import { UserRole } from '../enum/user.role';

import { UserAddressDTO } from './user-address.dto';

export class CreateUserDto {
  @IsNotEmpty({ message: 'fullName cannot be empty' })
  @IsString({ message: 'fullName must be a string' })
  @ApiProperty({ name: 'fullName', example: 'Fulano de Tal', })
  readonly fullName: string;

  @ApiProperty({ name: 'photoUrl', example: 'http://photo', required: false })
  @IsString({ message: 'photoURL must be a string' })
  readonly photoUrl?: string;

  @IsNotEmpty({ message: 'email cannot be empty' })
  @IsEmail(
    {},
    {
      message: 'email must be a valid email',
    },
  )
  @ApiProperty({ name: 'email', example: 'fulano@gmail.com', })
  readonly email: string;

  @IsString({ message: 'password must be a string' })
  @IsNotEmpty({ message: 'password cannot be empty' })
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
    message:
      'The password must contain at least 8 characters, including at least one letter, one number and one special character'
  })
  @ApiProperty({ name: 'password', example: '12345aA!', })
  readonly password: string;

  @Match('password', { message: 'passwords do not match' })
  @IsNotEmpty({ message: 'passwordConfirmation cannot be empty' })
  @ApiProperty({ name: 'passwordConfirmation', example: '12345aA!', })
  readonly passwordConfirmation: string;

  @IsString({ message: 'phone must be a string' })
  @ApiProperty({ name: 'phone', example: '83999999999', required: false })
  readonly phone?: string;

  @IsNotEmpty()
  @IsObject()
  @ValidateNested()
  @Type(() => UserAddressDTO)
  @ApiProperty({ name: 'address', example: UserAddressDTO, })
  readonly address: UserAddressDTO;

  @ApiProperty({ name: 'role', example: 'admin', })
  readonly role: UserRole;
}
