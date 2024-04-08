import { UserDto } from 'src/user/DTO/user.dto';

export class BlockUserDto {
  user: UserDto;
  blockedUser: UserDto;
}
