import { Test, TestingModule } from '@nestjs/testing';
import { InventarizationService } from './inventarization.service';

describe('InventarizationService', () => {
  let service: InventarizationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InventarizationService],
    }).compile();

    service = module.get<InventarizationService>(InventarizationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
