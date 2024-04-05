import { Geometry } from 'geojson';
import {
  DataType,
  Model,
  Table,
  Column,
  BelongsTo,
} from 'sequelize-typescript';
import { Disaster } from 'src/disaster/disaster.model';

@Table({
  tableName: 'cyclone',
})
export class Cyclone extends Model {
  @BelongsTo(() => Disaster)
  @Column(DataType.INTEGER)
  disasterId: number;

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
