import { UserDto } from 'src/user/DTO/user.dto';

export class FollowerDto {
  user: UserDto;
  follower: UserDto;
}
