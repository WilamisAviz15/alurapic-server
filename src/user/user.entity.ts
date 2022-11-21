import { Exclude } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { IsUniqueUsername } from './is-unique-username.validator';

export class User {
  id: number;

  @IsUniqueUsername({
    message: 'Username already exists.',
  })
  @IsNotEmpty({
    message: 'Username is required.',
  })
  @IsString({
    message: 'Username is not valid.',
  })
  username: string;

  @IsEmail({
    message: 'Email is not valid.',
  })
  email: string;

  @Exclude({
    toPlainOnly: true,
  })
  @IsNotEmpty({
    message: 'Password is required.',
  })
  password: string;

  @IsNotEmpty({
    message: 'Fullname is required.',
  })
  fullname: string;

  created: Date;
}
