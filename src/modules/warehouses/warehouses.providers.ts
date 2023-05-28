import { Warehouse } from './entities/warehouse.entity';
import { WAREHOUSE_REPOSITORY } from '../../constants';

export const warehousesProviders = [
  {
    provide: WAREHOUSE_REPOSITORY,
    useValue: Warehouse,
  },
];
