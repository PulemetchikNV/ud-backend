import { Controller, Get } from '@nestjs/common';
import { ProductsService } from '../../modules/products/products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly ProductsService: ProductsService) {}
  @Get('list')
  getList() {
    return this.ProductsService.findAll();
  }
}
