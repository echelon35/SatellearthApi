import { Point } from 'geojson';
import { Source } from '../Models/source.model';
import { Ville } from '../Models/ville.model';

export class DisasterDto {
  point: Point;
  sourceId: string;
  source: Source;
  idSource: string;
  lien_source: string;
  nb_ressenti: number;
  visible: boolean;
  distance_ville: number;
  ville: Ville;
}
