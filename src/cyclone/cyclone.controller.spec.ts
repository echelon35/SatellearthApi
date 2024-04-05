import { Test, TestingModule } from '@nestjs/testing';
import { CycloneController } from './cyclone.controller';

describe('CycloneController', () => {
  let controller: CycloneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CycloneController],
    }).compile();

    controller = module.get<CycloneController>(CycloneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
