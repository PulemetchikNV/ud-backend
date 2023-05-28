import { Module } from '@nestjs/common';
import { InventarizationService } from './inventarization.service';
import { inventarizationProviders } from './inventarization.providers';
@Module({
  providers: [InventarizationService, ...inventarizationProviders],
  exports: [InventarizationService],
})
export class InventarizationModule {}
