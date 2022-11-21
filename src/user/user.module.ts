import { Module } from '@nestjs/common';

import { UserController } from '../user/user.controller';
import { UserService } from '../user/user.service';
import { IsUniqueUsernameConstraint } from './is-unique-username.validator';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, IsUniqueUsernameConstraint],
})
export class UserModule {}
