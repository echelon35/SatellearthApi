import { Geometry } from 'geojson';

export class PostDto {
  point: Geometry;
  localisation: string;
  keywords: string[];
  medias: string[];
  description: string;
  visible: boolean;
  sharedContent: string;
  signal: boolean;
}
