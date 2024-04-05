import { Test, TestingModule } from '@nestjs/testing';
import { SeismeController } from './seisme.controller';

describe('SeismeController', () => {
  let controller: SeismeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeismeController],
    }).compile();

    controller = module.get<SeismeController>(SeismeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
