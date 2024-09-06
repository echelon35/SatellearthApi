import { IPaginationOptions } from 'src/common/Interfaces/IPaginationOptions';

export interface IEruptionFilter extends IPaginationOptions {
  from: string;
  to: string;
  sw_lon: number;
  sw_lat: number;
  ne_lon: number;
  ne_lat: number;
}
