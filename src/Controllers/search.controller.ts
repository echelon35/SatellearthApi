import { Controller, Get } from '@nestjs/common';
import { SearchService } from '../Application/Services/search.service';
import { SearchDto } from '../Domain/DTO/search.dto';

@Controller('search')
export class SearchController {
  constructor(private searchService: SearchService) {}

  @Get()
  async findAll(): Promise<SearchDto[]> {
    const searches = await this.searchService.findAll();
    return searches;
  }
}
