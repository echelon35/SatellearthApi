import { Geometry } from 'geojson';
import {
  DataType,
  Model,
  Table,
  Column,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Disaster } from 'src/disaster/disaster.model';

@Table({
  tableName: 'eruptions',
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
