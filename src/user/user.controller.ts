import {
  Body,
  Controller,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from '../user/user.service';
import { NestResponse } from '../core/http/nest-response';
import { NestResponseBuilder } from '../core/http/nest-response-builder';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get(':username')
  public searchByUsername(@Param('username') username: string) {
    const usernameFound = this.userService.searchByUsername(username);

    if (!usernameFound) {
      throw new NotFoundException({
        statusCode: HttpStatus.NOT_FOUND,
        message: 'User not found.',
      });
    }

    return usernameFound;
  }

  @Post()
  public create(@Body() user: User): NestResponse {
    const userCreated = this.userService.create(user);
    return new NestResponseBuilder()
      .withStatus(HttpStatus.CREATED)
      .withHeader({
        location: `/users/${userCreated.username}`,
      })
      .withBody(userCreated)
      .build();
  }
}
