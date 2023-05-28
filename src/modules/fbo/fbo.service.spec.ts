import { Test, TestingModule } from '@nestjs/testing';
import { FboService } from './fbo.service';

describe('FboService', () => {
  let service: FboService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FboService],
    }).compile();

    service = module.get<FboService>(FboService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
