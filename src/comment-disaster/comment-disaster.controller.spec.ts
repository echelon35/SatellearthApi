import { Test, TestingModule } from '@nestjs/testing';
import { CommentDisasterController } from './comment-disaster.controller';

describe('CommentDisasterController', () => {
  let controller: CommentDisasterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommentDisasterController],
    }).compile();

    controller = module.get<CommentDisasterController>(
      CommentDisasterController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
