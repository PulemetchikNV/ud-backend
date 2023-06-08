import { Test, TestingModule } from '@nestjs/testing';
import { InventarizationController } from './inventarization.controller';

describe('InventarizationController', () => {
  let controller: InventarizationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InventarizationController],
    }).compile();

    controller = module.get<InventarizationController>(InventarizationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
