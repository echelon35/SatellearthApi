import {
  DataType,
  Table,
  Model,
  Column,
  Scopes,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Alea } from './alea.model';
import { User } from './user.model';

@Scopes(() => ({
  user: {
    include: [
      {
        model: User,
        as: 'user',
        required: true,
      },
    ],
  },
}))
@Table({
  tableName: 'posts',
  freezeTableName: true,
})
export class Post extends Model {
  @ForeignKey(() => Alea)
  @Column(DataType.INTEGER)
  aleaId: number;
  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId: number;
  @BelongsTo(() => User, 'userId')
  user: User;
  @Column(DataType.GEOMETRY)
  point: any;
  @Column(DataType.TEXT)
  localisation: string;
  @Column(DataType.ARRAY(DataType.STRING(255)))
  keywords: string[];
  @Column(DataType.ARRAY(DataType.STRING(255)))
  medias: string[];
  @Column(DataType.STRING(500))
  description: string;
  @Column(DataType.BOOLEAN)
  visible: boolean;
  @Column(DataType.TEXT)
  sharedContent: string;
  @Column(DataType.BOOLEAN)
  signal: boolean;
}
