import { DisasterDto } from './disaster.dto';
import { UserDto } from './user.dto';

export class CommentDisasterDto {
  disaster: DisasterDto;
  user: UserDto;
  comment: string;
}
