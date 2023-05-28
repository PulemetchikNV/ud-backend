import { Inject, Injectable } from '@nestjs/common';
import {
  PRODUCT_REPOSITORY,
  ORGANIZATION_PRODUCT_REPOSITORY,
} from '../../constants';
import { Product } from './entities/product.entity';
import { OrganizationProduct } from './entities/OrganizationProduct.entity';

@Injectable()
export class ProductsService {
  constructor(
    @Inject(PRODUCT_REPOSITORY)
    private readonly productRepository: typeof Product,

    @Inject(ORGANIZATION_PRODUCT_REPOSITORY)
    private readonly orgProductRepository: typeof OrganizationProduct,
  ) {}
}
