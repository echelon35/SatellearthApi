import { Geometry } from 'geojson';

export class PaysDto {
  namefr: string;
  nameus: string;
  trigramme: string;
  iso3166_2: string;
  continent: string;
  population: number;
  superficie: number;
  geom: Geometry;
  wikilink: string;
  geojson: string;
}
