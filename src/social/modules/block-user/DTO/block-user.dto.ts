import { UserDto } from 'src/auth/modules/user/DTO/user.dto';

export class BlockUserDto {
  user: UserDto;
  blockedUser: UserDto;
}
