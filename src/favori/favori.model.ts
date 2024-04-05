import {
  DataType,
  Model,
  Column,
  Table,
  BelongsTo,
} from 'sequelize-typescript';
import { Disaster } from 'src/disaster/disaster.model';

@Table({
  tableName: 'favori',
  freezeTableName: true,
})
export class FavoriEntity extends Model {
  @BelongsTo(() => Disaster)
  @Column(DataType.INTEGER)
  disasterId: number;

  @Column(DataType.INTEGER)
  userId: number;
}
