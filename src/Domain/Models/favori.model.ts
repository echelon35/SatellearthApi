import {
  DataType,
  Model,
  Column,
  Table,
  BelongsTo,
  ForeignKey,
  DefaultScope,
} from 'sequelize-typescript';
import { Disaster } from './disaster.model';
import { User } from './user.model';

@DefaultScope(() => ({
  include: [
    { model: User, as: 'user' },
    { model: Disaster, as: 'disaster' },
  ],
}))
@Table({
  tableName: 'favoris',
  freezeTableName: true,
})
export class Favori extends Model {
  @ForeignKey(() => Disaster)
  @Column(DataType.INTEGER)
  disasterId: number;

  @BelongsTo(() => Disaster, 'disasterId')
  disaster: Disaster;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId: number;

  @BelongsTo(() => User, 'userId')
  user: User;
}
