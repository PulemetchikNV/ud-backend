import { Fbs } from './entities/fbs.entity';
import { FbsOrder } from './entities/fbs_order.entity';
import { FBS_REPOSITORY, FBS_ORDER_REPOSITORY } from '../../constants';

export const fbsProviders = [
  {
    provide: FBS_REPOSITORY,
    useValue: Fbs,
  },
  {
    provide: FBS_ORDER_REPOSITORY,
    useValue: FbsOrder,
  },
];
