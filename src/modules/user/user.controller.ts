import { Controller, Post, Get, Patch, Delete } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/user')
  postUser(): string {
    return this.userService.postUser();
  }
  @Get('/user')
  getUser(): string {
    return this.userService.getUser();
  }
  @Patch('/user')
  PatchUser(): string {
    return this.userService.patchUser();
  }
  @Delete('/user')
  deleteUser(): string {
    return this.userService.deleteUser();
  }
}
