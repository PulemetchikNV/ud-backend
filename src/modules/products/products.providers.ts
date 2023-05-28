import { Product } from './entities/product.entity';
import { OrganizationProduct } from './entities/OrganizationProduct.entity';
import {
  PRODUCT_REPOSITORY,
  ORGANIZATION_PRODUCT_REPOSITORY,
} from '../../constants';

export const productsProviders = [
  {
    provide: PRODUCT_REPOSITORY,
    useValue: Product,
  },
  {
    provide: ORGANIZATION_PRODUCT_REPOSITORY,
    useValue: OrganizationProduct,
  },
];
