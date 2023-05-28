import { Controller, Get } from '@nestjs/common';
import { WarehousesService } from '../../modules/warehouses/warehouses.service';
@Controller('warehouses')
export class WarehousesController {
  constructor(private readonly warehousesService: WarehousesService) {}
  @Get('list')
  getList() {
    return this.warehousesService.findAll();
  }
}
