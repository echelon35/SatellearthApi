import {
  DataType,
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  DefaultScope,
} from 'sequelize-typescript';
import { User } from './user.model';

@DefaultScope(() => ({
  include: [
    { model: User, as: 'user', attributes: ['username'] },
    { model: User, as: 'blockedUser', attributes: ['username'] },
  ],
}))
@Table({
  tableName: 'block_users',
  freezeTableName: true,
})
export class BlockUser extends Model {
  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId: number;
  @BelongsTo(() => User, 'userId')
  user: User;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  blockedId: number;
  @BelongsTo(() => User, 'blockedId')
  blockedUser: User;
}
