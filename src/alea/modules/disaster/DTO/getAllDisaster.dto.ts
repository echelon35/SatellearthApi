import { PaginationDto } from 'src/common/DTO/Pagination.dto';

export class GetAllDisasters extends PaginationDto {
  type: string;
  from: string;
  to: string;
  sw_lon: number;
  sw_lat: number;
  ne_lon: number;
  ne_lat: number;
  countOnly: boolean;
}
