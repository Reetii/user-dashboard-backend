import { Controller, Get, Post, Put, Delete, Body, Param, UseFilters } from '@nestjs/common';
import {CreateUserDto} from './dto/create-user-dto';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';
import {HttpExceptionFilter} from '../filters/error';
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async findAll(): Promise<User[]>  {
    return this.userService.findAll();

  }
  /*@Get(':id')
  findOne(@Param() param): string {
    return "Get all users";

  }*/
  @Post()
  @UseFilters(new HttpExceptionFilter())
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User>{

    return this.userService.create(createUserDto);
  }
  @Delete(':id')
  deleteUser(@Body() updateItemDto: CreateUserDto, @Param('id') id): Promise<User>{
    return this.userService.changeStatus(id, updateItemDto);
  }
 @Put(':id')
 update(@Body() updateItemDto: CreateUserDto, @Param('id') id): Promise<User> {
   return this.userService.update(id, updateItemDto);
 }

}
