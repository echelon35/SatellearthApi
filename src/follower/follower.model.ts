import {
  DataType,
  Model,
  Column,
  Table,
  ForeignKey,
  BelongsTo,
  DefaultScope,
} from 'sequelize-typescript';
import { User } from 'src/user/user.model';

@DefaultScope(() => ({
  include: [
    { model: User, as: 'user' },
    { model: User, as: 'follower' },
  ],
}))
@Table({
  tableName: 'followers',
  freezeTableName: true,
})
export class Follower extends Model {
  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId: number;
  @BelongsTo(() => User, 'userId')
  user: User;
  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  followerId: number;
  @BelongsTo(() => User, 'followerId')
  follower: User;
}
