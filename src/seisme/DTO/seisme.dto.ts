import { DisasterDto } from 'src/disaster/DTO/disaster.dto';

export class SeismeDto {
  nb_stations: number;
  magnitude: number;
  precision: number;
  type_magnitude: string;
  profondeur_epicentre: number;
  tsunami: boolean;
  intensite: number;
  nb_ressenti: number;
  disaster: DisasterDto;
}
