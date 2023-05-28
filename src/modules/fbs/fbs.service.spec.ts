import { Test, TestingModule } from '@nestjs/testing';
import { FbsService } from './fbs.service';

describe('FbsService', () => {
  let service: FbsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FbsService],
    }).compile();

    service = module.get<FbsService>(FbsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
