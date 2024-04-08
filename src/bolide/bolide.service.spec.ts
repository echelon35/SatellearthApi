import { Test, TestingModule } from '@nestjs/testing';
import { BolideService } from './bolide.service';

describe('BolideService', () => {
  let service: BolideService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BolideService],
    }).compile();

    service = module.get<BolideService>(BolideService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
