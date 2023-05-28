import { Injectable, Inject } from '@nestjs/common';
import { Warehouse } from './entities/warehouse.entity';
import { warehousesDto } from './dto/warehouses.dto';
import { WAREHOUSE_REPOSITORY } from '../../constants';
@Injectable()
export class WarehousesService {
  constructor(
    @Inject(WAREHOUSE_REPOSITORY)
    private readonly warehousesRepository: typeof Warehouse,
  ) {}

  async create(warehouses: warehousesDto): Promise<Warehouse> {
    return await this.warehousesRepository.create<Warehouse>(warehouses);
  }

  async findOneById(id: number): Promise<Warehouse> {
    return await this.warehousesRepository.findOne<Warehouse>({
      where: { id },
    });
  }
  async findAll(): Promise<Warehouse[]> {
    return await this.warehousesRepository.findAll();
  }

  async updateById(
    id: number,
    warehouses: warehousesDto,
  ): Promise<[affectedCount: number]> {
    return await this.warehousesRepository.update(warehouses, {
      where: { id },
    });
  }

  async deleteById(id: number): Promise<number> {
    return await this.warehousesRepository.destroy({ where: { id } });
  }
}
