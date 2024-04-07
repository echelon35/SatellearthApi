import { Geometry } from 'geojson';
import { DisasterDto } from 'src/disaster/DTO/disaster.dto';

export class CycloneDto {
  disaster: DisasterDto;
  nom: string;
  vitesse_max: number;
  trajectoire: string[];
  surface: string[];
  prevision: Geometry;
}
