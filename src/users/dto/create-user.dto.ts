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

import { UserAddressDTO } from './user-address.dto';

export class CreateUserDto {
  @IsNotEmpty({ message: 'fullName cannot be empty' })
  @IsString({ message: 'fullName must be a string' })
  readonly fullName: string;

  @IsString({ message: 'photoURL must be a string' })
  readonly photoUrl: string;

  @IsNotEmpty({ message: 'email cannot be empty' })
  @IsEmail(
    {},
    {
      message: 'email must be a valid email',
    },
  )
  readonly email: string;

  @IsNotEmpty({ message: 'password cannot be empty' })
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
    message:
      'The password must contain at least 8 characters, including at least one letter, one number and one special character'
  })
  readonly password: string;

  @Match('password', { message: 'passwords do not match' })
  @IsNotEmpty({ message: 'passwordConfirmation cannot be empty' })
  readonly passwordConfirmation: string;

  @IsString({ message: 'phone must be a string' })
  readonly phone?: string;

  @IsNotEmpty()
  @IsObject()
  @ValidateNested()
  @Type(() => UserAddressDTO)
  readonly address: UserAddressDTO;
}
