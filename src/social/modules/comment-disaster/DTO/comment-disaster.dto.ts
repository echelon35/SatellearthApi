import { DisasterDto } from 'src/alea/modules/disaster/DTO/disaster.dto';
import { UserDto } from 'src/auth/modules/user/DTO/user.dto';

export class CommentDisasterDto {
  disaster: DisasterDto;
  user: UserDto;
  comment: string;
}
