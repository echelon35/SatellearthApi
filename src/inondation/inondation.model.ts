import { Geometry } from 'geojson';
import {
  DataType,
  Table,
  Column,
  Model,
  DefaultScope,
  BelongsTo,
} from 'sequelize-typescript';
import { Disaster } from 'src/disaster/disaster.model';

@DefaultScope(() => ({
  include: [{ model: Disaster, as: 'disaster' }],
}))
@Table({
  tableName: 'inondations',
  freezeTableName: true,
})
export class Inondation extends Model {
  @BelongsTo(() => Disaster)
  @Column(DataType.INTEGER)
  disasterId: number;

  @Column(DataType.INTEGER)
  niveau_alerte: number;

  @Column(DataType.GEOMETRY)
  surface: Geometry;
}
