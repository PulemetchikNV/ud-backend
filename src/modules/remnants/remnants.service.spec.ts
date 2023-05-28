import { Test, TestingModule } from '@nestjs/testing';
import { RemnantsService } from './remnants.service';

describe('RemnantsService', () => {
  let service: RemnantsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RemnantsService],
    }).compile();

    service = module.get<RemnantsService>(RemnantsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
