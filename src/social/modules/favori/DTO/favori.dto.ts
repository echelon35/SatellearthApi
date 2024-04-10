import { DisasterDto } from 'src/alea/modules/disaster/DTO/disaster.dto';
import { UserDto } from 'src/user/DTO/user.dto';

export class FavoriDto {
  user: UserDto;
  disaster: DisasterDto;
}
