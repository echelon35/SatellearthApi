import {
  DataType,
  Table,
  Column,
  Model,
  DefaultScope,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Disaster } from './disaster.model';

@DefaultScope(() => ({
  include: [{ model: Disaster, as: 'disaster' }],
}))
@Table({
  tableName: 'bolides',
  freezeTableName: true,
})
export class Bolide extends Model {
  @ForeignKey(() => Disaster)
  @Column(DataType.INTEGER)
  disasterId: number;

  @BelongsTo(() => Disaster)
  disaster: Disaster;

  @Column(DataType.DOUBLE)
  vitesse: number;

  @Column(DataType.DOUBLE)
  energie: number;

  @Column(DataType.DOUBLE)
  energie_impact: number;

  @Column(DataType.DOUBLE)
  altitude: number;
}
