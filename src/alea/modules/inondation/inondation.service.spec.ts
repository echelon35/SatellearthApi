import { Test, TestingModule } from '@nestjs/testing';
import { InondationService } from './inondation.service';

describe('InondationService', () => {
  let service: InondationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InondationService],
    }).compile();

    service = module.get<InondationService>(InondationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
