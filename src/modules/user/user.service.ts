import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  postUser(): string {
    return 'postUser';
  }
  getUser(): string {
    return 'getUser';
  }
  patchUser(): string {
    return 'patchUser';
  }
  deleteUser(): string {
    return 'deleteUser';
  }
}
