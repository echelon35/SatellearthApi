import { Test, TestingModule } from '@nestjs/testing';
import { SearchPlaceService } from './search-place.service';

describe('SearchPlaceService', () => {
  let service: SearchPlaceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SearchPlaceService],
    }).compile();

    service = module.get<SearchPlaceService>(SearchPlaceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
