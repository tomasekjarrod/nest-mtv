import { Test, TestingModule } from '@nestjs/testing';
import { InterviewFePrepController } from './interview-fe-prep.controller';

describe('InterviewFePrepController', () => {
  let controller: InterviewFePrepController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InterviewFePrepController],
    }).compile();

    controller = module.get<InterviewFePrepController>(InterviewFePrepController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
