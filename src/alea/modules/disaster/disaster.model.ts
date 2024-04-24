import { Point } from 'geojson';
import {
  DataType,
  Table,
  Column,
  Model,
  BelongsTo,
  ForeignKey,
  Scopes,
} from 'sequelize-typescript';
import { Alea } from 'src/alea/alea.model';
import { Source } from '../source/source.model';
import { Ville } from 'src/atlas/modules/ville/ville.model';
import { Seisme } from '../seisme/seisme.model';
import { Inondation } from '../inondation/inondation.model';
import { Bolide } from '../bolide/bolide.model';
import { Eruption } from '../eruption/eruption.model';

@Scopes(() => ({
  feed: {
    attributes: [],
    include: [
      { model: Alea, as: 'alea' },
      { model: Bolide, as: 'bolide' },
      { model: Eruption, as: 'eruption' },
      { model: Inondation, as: 'inondation' },
      { model: Seisme, as: 'seisme' },
      { model: Ville, as: 'ville' },
    ],
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
