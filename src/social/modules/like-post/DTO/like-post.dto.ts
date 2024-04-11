import { User } from 'src/auth/modules/user/user.model';
import { Post } from '../../post/post.model';

export class LikePostDto {
  liked: boolean;
  reactionEmoji: string;
  user: User;
  post: Post;
}
