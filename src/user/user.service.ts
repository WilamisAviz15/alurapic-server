import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
  private users: User[] = [];

  constructor() {}

  create(user: User) {
    this.users.push(user);

    return user;
  }

  searchByUsername(username: string): User {
    return this.users.find((user) => user.username === username);
  }
}
