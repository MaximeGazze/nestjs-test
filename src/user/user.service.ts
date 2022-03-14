import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    const users = await this.userRepository.find();
    return users;
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userRepository.findOne(id);
    if (!user) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    return user;
  }

  async create(userDto: User): Promise<User> {
    return this.userRepository.save(userDto);
  }

  async update(id: string, userDto: User): Promise<User> {
    return await this.userRepository.save({ id, ...userDto });
  }

  async patch(id: string, userDto: User): Promise<User> {
    const user = await this.userRepository.findOne(id);
    return await this.userRepository.save({ id, user, ...userDto });
    // return await this.userRepository.
  }

  async remove(id: string): Promise<User> {
    const user = await this.userRepository.findOne(id);
    if (!user) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    return this.userRepository.remove(user);
  }
}
