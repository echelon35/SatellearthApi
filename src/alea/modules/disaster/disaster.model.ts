import { Point } from 'geojson';
import {
  DataType,
  Table,
  Column,
  Model,
  BelongsTo,
  ForeignKey,
  Scopes,
  DefaultScope,
} from 'sequelize-typescript';
import { Alea } from 'src/alea/alea.model';
import { Source } from '../source/source.model';
import { Ville } from 'src/atlas/modules/ville/ville.model';

@DefaultScope(() => ({
  include: [{ model: Alea, as: 'alea', attributes: ['name'] }],
}))
@Scopes(() => ({
  feed: {
    attributes: ['createdAt', 'updatedAt', 'id', 'point'],
    include: [{ model: Alea, as: 'alea' }],
  },
  minimal: {
    attributes: ['id'],
    include: [{ model: Alea, as: 'alea' }],
  },
}))
@Table({
  tableName: 'disasters',
  freezeTableName: true,
})
export class Disaster extends Model {
  @ForeignKey(() => Alea)
  @Column(DataType.INTEGER)
  aleaId: number;

  @BelongsTo(() => Alea, 'aleaId')
  alea: Alea;

  @Column({ type: DataType.DATE, unique: 'unique_disaster' })
  premier_releve: Date;

  @Column({ type: DataType.DATE, unique: 'unique_disaster' })
  dernier_releve: Date;

  @Column({ type: DataType.GEOMETRY, unique: 'unique_disaster' })
  point: Point;

  @ForeignKey(() => Source)
  @Column(DataType.STRING(50))
  sourceId: string;

  @BelongsTo(() => Source)
  source: Source;

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

  @ForeignKey(() => Ville)
  @Column(DataType.INTEGER)
  villeId: number;

  @BelongsTo(() => Ville)
  ville: Ville;
}
