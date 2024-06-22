import { IsNotEmpty, MinLength } from 'class-validator';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

export class SignupDto extends CreateUserDto {
  @IsNotEmpty()
  @MinLength(10)
  confirmPassword: string;
}
