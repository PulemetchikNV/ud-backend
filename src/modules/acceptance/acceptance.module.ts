import { Module } from '@nestjs/common';
import { AcceptanceService } from './acceptance.service';
import { acceptanceProviders } from './acceptance.providers';
import { AcceptanceController } from '../../controllers/acceptance/acceptance.controller';
import { ProductsModule } from '../products/products.module';
@Module({
  imports: [ProductsModule],
  providers: [AcceptanceService, ...acceptanceProviders],
  exports: [AcceptanceService],
  controllers: [AcceptanceController],
})
export class AcceptanceModule {}
