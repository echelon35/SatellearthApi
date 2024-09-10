import { Post } from '../Models/post.model';
import { User } from '../Models/user.model';

export class LikePostDto {
  liked: boolean;
  reactionEmoji: string;
  user: User;
  post: Post;
}
