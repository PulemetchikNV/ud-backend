import { Disposal } from './entities/disposal.entity';
import { DisposalProduct } from './entities/disposal_product.entity';
import { DISPOSAL_REPOSITORY } from '../../constants';
import { DISPOSAL_PRODUCT_REPOSITORY } from '../../constants';

export const disposalProviders = [
  {
    provide: DISPOSAL_REPOSITORY,
    useValue: Disposal,
  },
  {
    provide: DISPOSAL_PRODUCT_REPOSITORY,
    useValue: DisposalProduct,
  },
];
