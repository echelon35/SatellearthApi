import { Test, TestingModule } from '@nestjs/testing';
import { PlaceTypesController } from './place_types.controller';

describe('PlaceTypesController', () => {
  let controller: PlaceTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlaceTypesController],
    }).compile();

    controller = module.get<PlaceTypesController>(PlaceTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
