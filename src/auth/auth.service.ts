import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { IUser, UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  async signup(createUserDto: CreateUserDto): Promise<any> {
    const { id } = await this.usersService.create(createUserDto);

    const access_token = await this.jwtService.signAsync({ sub: id });

    return { access_token };
  }
}
