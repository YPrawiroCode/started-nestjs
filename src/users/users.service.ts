import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  create(email: string, password: string) {
    console.log(
      '🚀 ~ file: users.service.ts:11 ~ UsersService ~ create ~ email',
      email,
    );
    const user = this.repo.create({ email, password });

    return this.repo.save(user);
  }
}
