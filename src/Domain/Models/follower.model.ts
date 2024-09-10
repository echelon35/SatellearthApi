import {
  DataType,
  Model,
  Column,
  Table,
  ForeignKey,
  BelongsTo,
  DefaultScope,
} from 'sequelize-typescript';
import { User } from './user.model';

@DefaultScope(() => ({
  include: [
    { model: User, as: 'user', attributes: ['username'] },
    { model: User, as: 'follower', attributes: ['username'] },
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
