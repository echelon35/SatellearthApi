import { Point } from 'geojson';
import {
  DataType,
  Table,
  Column,
  Model,
  Scopes,
  BelongsTo,
} from 'sequelize-typescript';
import { Seisme } from 'src/seisme/seisme.model';
import { Alea } from 'src/alea/alea.model';
import { Ville } from 'src/ville/ville.model';
import { Source } from 'src/source/source.model';

// @DefaultScope(() => ({
//   attributes: ['id', 'primaryColor', 'secondaryColor', 'producedAt'],
// }))
@Scopes(() => ({
  seisme: {
    include: [{ model: Seisme, as: 'seisme' }],
  },
}))
@Table({
  tableName: 'disasters',
  freezeTableName: true,
})
export class Disaster extends Model {
  @BelongsTo(() => Alea)
  @Column({ type: DataType.INTEGER, unique: 'unique_disaster' })
  aleaId: number;

  @Column({ type: DataType.DATE, unique: 'unique_disaster' })
  premier_releve: Date;

  @Column({ type: DataType.DATE, unique: 'unique_disaster' })
  dernier_releve: Date;

  @Column({ type: DataType.GEOMETRY, unique: 'unique_disaster' })
  point: Point;

  @BelongsTo(() => Source)
  @Column(DataType.STRING(50))
  sourceId: string;

  @Column(DataType.STRING(20))
  idSource: string;

  @Column(DataType.STRING)
  lien_source: string;

  @Column(DataType.INTEGER)
  nb_ressenti: number;

  @Column(DataType.BOOLEAN)
  visible: boolean;

  @Column(DataType.DOUBLE)
  distance_ville: number;

  @BelongsTo(() => Ville)
  @Column(DataType.INTEGER)
  villeId: number;
}
