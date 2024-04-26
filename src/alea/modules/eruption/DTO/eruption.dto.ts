import { Geometry } from 'geojson';
import { DisasterDto } from '../../disaster/DTO/disaster.dto';

export class EruptionDto {
  nom: string;
  surface: Geometry;
  disaster: DisasterDto;
}
