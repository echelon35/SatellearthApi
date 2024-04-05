import { Test, TestingModule } from '@nestjs/testing';
import { InondationController } from './inondation.controller';

describe('InondationController', () => {
  let controller: InondationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InondationController],
    }).compile();

    controller = module.get<InondationController>(InondationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
