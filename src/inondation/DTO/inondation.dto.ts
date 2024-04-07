import { Geometry } from 'geojson';
import { DisasterDto } from 'src/disaster/DTO/disaster.dto';

export class InondationDto {
  niveau_alerte: number;
  surface: Geometry;
  disaster: DisasterDto;
}
