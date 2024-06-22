import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<any> {
    return await this.userService.findOne(id);
  }

  @Get()
  async findAll(): Promise<any[]> {
    return await this.userService.findAll();
  }
}
