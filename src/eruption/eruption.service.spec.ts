import { Test, TestingModule } from '@nestjs/testing';
import { EruptionService } from './eruption.service';

describe('EruptionService', () => {
  let service: EruptionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EruptionService],
    }).compile();

    service = module.get<EruptionService>(EruptionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
