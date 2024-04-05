import { DataType, Model, Table, Column } from 'sequelize-typescript';

@Table({
  tableName: 'post_likes',
  freezeTableName: true,
})
export class LikePost extends Model {
  @Column(DataType.INTEGER)
  postId: number;
  @Column(DataType.INTEGER)
  userId: number;
  @Column(DataType.BOOLEAN)
  liked: boolean;
  @Column(DataType.ENUM('like', 'love', 'laugh', 'encourage', 'affraid'))
  reactionEmoji: string;
}
