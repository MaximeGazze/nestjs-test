import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({ summary: 'Return all users' })
  @ApiResponse({ status: 200, description: 'OK' })
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Return a user with the given id' })
  @ApiResponse({ status: 200, description: 'OK', type: User })
  @ApiResponse({ status: 404, description: 'Not found' })
  findOne(@Param('id') id: string): Promise<User> {
    return this.userService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a user' })
  @ApiResponse({ status: 201, description: 'Created', type: User })
  @ApiResponse({ status: 400, description: 'Bad request' })
  create(@Body() userDto: User): Promise<User> {
    return this.userService.create(userDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Replace user with the given id' })
  @ApiResponse({ status: 200, description: 'OK', type: User })
  @ApiResponse({ status: 404, description: 'Not found' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  update(@Param('id') id: string, @Body() userDto: User): Promise<User> {
    return this.userService.update(id, userDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Modify user with the given id' })
  @ApiResponse({ status: 200, description: 'OK', type: User })
  @ApiResponse({ status: 404, description: 'Not found' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  patch(@Param('id') id: string, @Body() userDto: User): Promise<User> {
    return this.userService.patch(id, userDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete user with the given id' })
  @ApiResponse({ status: 200, description: 'OK', type: User })
  @ApiResponse({ status: 404, description: 'Not found' })
  remove(@Param('id') id: string): Promise<User> {
    return this.userService.remove(id);
  }
}
