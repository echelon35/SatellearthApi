import { DisasterDto } from 'src/disaster/DTO/disaster.dto';
import { UserDto } from 'src/user/DTO/user.dto';

export class CommentDisasterDto {
  disaster: DisasterDto;
  user: UserDto;
  comment: string;
}
