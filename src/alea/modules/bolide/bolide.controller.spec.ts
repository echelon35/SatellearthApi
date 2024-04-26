import { Test, TestingModule } from '@nestjs/testing';
import { BolideController } from './bolide.controller';

describe('BolideController', () => {
  let controller: BolideController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BolideController],
    }).compile();

    controller = module.get<BolideController>(BolideController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
