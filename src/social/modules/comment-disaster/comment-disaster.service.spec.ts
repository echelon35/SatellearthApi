import { Test, TestingModule } from '@nestjs/testing';
import { CommentDisasterService } from './comment-disaster.service';

describe('CommentDisasterService', () => {
  let service: CommentDisasterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommentDisasterService],
    }).compile();

    service = module.get<CommentDisasterService>(CommentDisasterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
