import {
  DataType,
  Table,
  Column,
  Model,
  ForeignKey,
} from 'sequelize-typescript';
import { User } from 'src/user/user.model';

@Table({
  tableName: 'block_users',
  freezeTableName: true,
})
export class BlockUserEntity extends Model {
  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId: number;
  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  blockedId: number;
}