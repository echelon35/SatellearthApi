import {
  DataType,
  Model,
  Table,
  Column,
  DefaultScope,
  BelongsTo,
  ForeignKey,
  Scopes,
} from 'sequelize-typescript';
import { Disaster } from '../disaster/disaster.model';

@DefaultScope(() => ({
  include: [{ model: Disaster, as: 'disaster' }],
}))
@Scopes(() => ({
  feed: {
    attributes: ['magnitude', 'type_magnitude'],
    include: [{ model: Disaster.scope('feed'), as: 'disaster' }],
  },
}))
@Table({
  tableName: 'seismes',
  freezeTableName: true,
})
export class Seisme extends Model {
  @ForeignKey(() => Disaster)
  @Column(DataType.INTEGER)
  disasterId: number;

  @BelongsTo(() => Disaster)
  disaster: Disaster;

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
