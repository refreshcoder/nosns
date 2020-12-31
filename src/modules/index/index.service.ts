import { Injectable } from '@nestjs/common';

@Injectable()
export class IndexService {
  welcome(): string {
    return 'Hello World!';
  }
}
