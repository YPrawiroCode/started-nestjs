import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('auth')
export class UsersController {
  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    console.log(
      '🚀 ~ file: users.controller.ts:8 ~ UsersController ~ createUser ~ body',
      body,
    );
  }
}
