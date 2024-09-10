import { Geometry } from 'geojson';
import { DisasterDto } from './disaster.dto';

export class InondationDto {
  niveau_alerte: number;
  surface: Geometry;
  disaster: DisasterDto;
}
