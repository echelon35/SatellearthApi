import { Geometry } from 'geojson';
import {
  DataType,
  Table,
  Column,
  Model,
  DefaultScope,
  BelongsTo,
  ForeignKey,
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
  @ForeignKey(() => Disaster)
  @Column(DataType.INTEGER)
  disasterId: number;

  @BelongsTo(() => Disaster)
  disaster: Disaster;

  @Column(DataType.INTEGER)
  niveau_alerte: number;

  @Column(DataType.GEOMETRY)
  surface: Geometry;
}
