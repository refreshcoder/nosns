import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';

import { IndexController } from './modules/index/index.controller';
import { IndexService } from './modules/index/index.service';

import { UserController } from './modules/user/user.controller';
import { UserService } from './modules/user/user.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://root:root@cluster0.awtxo.azure.mongodb.net/miniarticle?retryWrites=true&w=majority',
      { useNewUrlParser: true },
    ),
  ],
  controllers: [IndexController, UserController],
  providers: [IndexService, UserService],
})
export class AppModule {}
