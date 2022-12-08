import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    console.log(
      '🚀 ~ file: users.controller.ts:11 ~ UsersController ~ createUser ~ body',
      body,
    );
    this.usersService.create(body.email, body.password);
  }
}
