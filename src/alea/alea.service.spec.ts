import { Test, TestingModule } from '@nestjs/testing';
import { AleaService } from './alea.service';

describe('AleaService', () => {
  let service: AleaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AleaService],
    }).compile();

    service = module.get<AleaService>(AleaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
