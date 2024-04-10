import { Test, TestingModule } from '@nestjs/testing';
import { SavedSearchController } from './saved-search.controller';

describe('SavedSearchController', () => {
  let controller: SavedSearchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SavedSearchController],
    }).compile();

    controller = module.get<SavedSearchController>(SavedSearchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
