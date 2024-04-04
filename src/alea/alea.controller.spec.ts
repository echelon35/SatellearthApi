import { Test, TestingModule } from '@nestjs/testing';
import { AleaController } from './alea.controller';

describe('AleaController', () => {
  let controller: AleaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AleaController],
    }).compile();

    controller = module.get<AleaController>(AleaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
