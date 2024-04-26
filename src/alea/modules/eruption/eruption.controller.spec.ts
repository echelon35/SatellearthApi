import { Test, TestingModule } from '@nestjs/testing';
import { EruptionController } from './eruption.controller';

describe('EruptionController', () => {
  let controller: EruptionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EruptionController],
    }).compile();

    controller = module.get<EruptionController>(EruptionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
