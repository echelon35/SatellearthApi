import { UserDto } from 'src/auth/modules/user/DTO/user.dto';

export class FollowerDto {
  user: UserDto;
  follower: UserDto;
}
