import { Test, TestingModule } from '@nestjs/testing';
import { SeismeService } from './seisme.service';

describe('SeismeService', () => {
  let service: SeismeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeismeService],
    }).compile();

    service = module.get<SeismeService>(SeismeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
