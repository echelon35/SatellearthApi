import {
  DataType,
  Model,
  Table,
  Column,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Post } from '../post/post.model';
import { User } from 'src/auth/modules/user/user.model';

@Table({
  tableName: 'post_likes',
  freezeTableName: true,
})
export class LikePost extends Model {
  @ForeignKey(() => Post)
  @Column(DataType.INTEGER)
  postId: number;
  @BelongsTo(() => Post)
  post: Post;
  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId: number;
  @BelongsTo(() => User)
  user: User;
  @Column(DataType.BOOLEAN)
  liked: boolean;
  @Column(DataType.ENUM('like', 'love', 'laugh', 'encourage', 'affraid'))
  reactionEmoji: string;
}
