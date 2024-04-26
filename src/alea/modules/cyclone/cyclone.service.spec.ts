import { Test, TestingModule } from '@nestjs/testing';
import { CycloneService } from './cyclone.service';

describe('CycloneService', () => {
  let service: CycloneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CycloneService],
    }).compile();

    service = module.get<CycloneService>(CycloneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
