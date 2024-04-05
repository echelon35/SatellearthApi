import { Test, TestingModule } from '@nestjs/testing';
import { SearchPlaceController } from './search-place.controller';

describe('SearchPlaceController', () => {
  let controller: SearchPlaceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SearchPlaceController],
    }).compile();

    controller = module.get<SearchPlaceController>(SearchPlaceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
