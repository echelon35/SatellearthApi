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
import { Disaster } from 'src/disaster/disaster.model';

@DefaultScope(() => ({
  include: [{ model: Disaster, as: 'disaster' }],
}))
@Table({
  tableName: 'cyclone',
})
export class Cyclone extends Model {
  @ForeignKey(() => Disaster)
  @Column(DataType.INTEGER)
  disasterId: number;

  @BelongsTo(() => Disaster)
  disaster: Disaster;

  @Column(DataType.STRING(255))
  nom: string;

  @Column(DataType.DOUBLE)
  vitesse_max: number;

  @Column(DataType.ARRAY(DataType.STRING))
  trajectoire: string[];

  @Column(DataType.ARRAY(DataType.STRING))
  surface: string[];

  @Column(DataType.GEOMETRY)
  prevision: Geometry;
}
