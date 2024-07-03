import { Module } from '@nestjs/common';
import { UsersController } from './contoller/users/users.controller';

@Module({
  controllers: [UsersController]
})
export class UsersModule {}
