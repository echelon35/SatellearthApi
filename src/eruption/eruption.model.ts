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
  tableName: 'eruptions',
})
export class Eruption extends Model {
  @BelongsTo(() => Disaster)
  @Column(DataType.INTEGER)
  disasterId: number;

  @Column(DataType.STRING(255))
  nom: string;

  @Column(DataType.GEOMETRY)
  surface: Geometry;
}
