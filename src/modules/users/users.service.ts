import { Injectable, Inject } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UserDto } from './dto/user.dto';
import { USER_REPOSITORY } from '../../constants';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
  ) {}

  async create(user: UserDto): Promise<User> {
    return await this.userRepository.create<User>(user);
  }

  async findOne(name: string): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { name } });
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.findAll();
  }
}
