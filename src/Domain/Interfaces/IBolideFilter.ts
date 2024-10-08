import { IPaginationOptions } from '../../Commons/Interfaces/IPaginationOptions';

export interface IBolideFilter extends IPaginationOptions {
  from: string;
  to: string;
  sw_lon: number;
  sw_lat: number;
  ne_lon: number;
  ne_lat: number;
}
