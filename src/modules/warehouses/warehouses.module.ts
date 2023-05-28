import { Module } from '@nestjs/common';
import { WarehousesService } from './warehouses.service';
import { warehousesProviders } from './warehouses.providers';
import { WarehousesController } from '../../controllers/warehouses/warehouses.controller';
@Module({
  providers: [WarehousesService, ...warehousesProviders],
  exports: [WarehousesService],
  controllers: [WarehousesController],
})
export class WarehousesModule {}
