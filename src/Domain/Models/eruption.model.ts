import { Geometry } from 'geojson';
import {
  DataType,
  Model,
  Table,
  Column,
  BelongsTo,
  ForeignKey,
  DefaultScope,
} from 'sequelize-typescript';
import { Disaster } from './disaster.model';

@DefaultScope(() => ({
  include: [{ model: Disaster, as: 'disaster' }],
}))
@Table({
  tableName: 'eruptions',
  freezeTableName: true,
})
export class Eruption extends Model {
  @ForeignKey(() => Disaster)
  @Column(DataType.INTEGER)
  disasterId: number;

  @BelongsTo(() => Disaster)
  disaster: Disaster;

  @Column(DataType.STRING(255))
  nom: string;

  @Column(DataType.GEOMETRY)
  surface: Geometry;
}
