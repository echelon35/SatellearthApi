import { Controller, Get } from '@nestjs/common';
import { SearchPlaceService } from '../Application/Services/search-place.service';
import { SearchPlaceDto } from '../Domain/DTO/search-place.dto';

@Controller('search-place')
export class SearchPlaceController {
  constructor(private searchPlaceService: SearchPlaceService) {}

  @Get()
  async findAll(): Promise<SearchPlaceDto[]> {
    const searchPlaces = await this.searchPlaceService.findAll();
    return searchPlaces;
  }
}
