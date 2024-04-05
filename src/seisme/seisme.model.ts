import {
  DataType,
  Model,
  Table,
  Column,
  DefaultScope,
  BelongsTo,
} from 'sequelize-typescript';
import { Disaster } from '../disaster/disaster.model';

@DefaultScope(() => ({
  include: [{ model: Disaster, as: 'disaster' }],
}))
@Table({
  tableName: 'seismes',
  freezeTableName: true,
})
export class Seisme extends Model {
  @BelongsTo(() => Disaster)
  @Column(DataType.INTEGER)
  disasterId: number;

  @Column(DataType.INTEGER)
  nb_stations: number;

  @Column(DataType.DOUBLE)
  magnitude: number;

  @Column(DataType.DOUBLE)
  precision: number;

  @Column(DataType.STRING(60))
  type_magnitude: string;

  @Column(DataType.INTEGER)
  profondeur_epicentre: number;

  @Column(DataType.BOOLEAN)
  tsunami: boolean;

  @Column(DataType.DOUBLE)
  intensite: number;

  @Column(DataType.INTEGER)
  nb_ressenti: number;
}
