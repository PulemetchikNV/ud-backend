import { Inject, Injectable } from '@nestjs/common';
import { Disposal } from './entities/disposal.entity';
import { DisposalProduct } from './entities/disposal_product.entity';
import { disposalDto } from './dto/disposal.dto';
import { disposalProductDto } from './dto/disposal_product.dto';
import { DISPOSAL_REPOSITORY } from '../../constants';
import { DISPOSAL_PRODUCT_REPOSITORY } from '../../constants';

@Injectable()
export class DisposalService {
  constructor(
    @Inject(DISPOSAL_REPOSITORY)
    private readonly disposalRepository: typeof Disposal,
    @Inject(DISPOSAL_PRODUCT_REPOSITORY)
    private readonly disposalProductRepository: typeof DisposalProduct,
  ) {}

  async create(disposal: disposalDto): Promise<Disposal> {
    return await this.disposalRepository.create<Disposal>(disposal);
  }

  async createProduct(
    disposalProduct: disposalProductDto,
  ): Promise<DisposalProduct> {
    return await this.disposalProductRepository.create<DisposalProduct>(
      disposalProduct,
    );
  }

  async findOneById(id: number): Promise<Disposal> {
    return await this.disposalRepository.findOne<Disposal>({
      where: { id },
    });
  }
  async findAll(): Promise<Disposal[]> {
    return await this.disposalRepository.findAll();
  }
  async findProductsById(id): Promise<DisposalProduct[]> {
    return await this.disposalProductRepository.findAll({
      where: { disposalId: id },
    });
  }

  async updateById(
    id: number,
    disposal: disposalDto,
  ): Promise<[affectedCount: number]> {
    return await this.disposalRepository.update(disposal, {
      where: { id },
    });
  }

  async deleteById(id: number): Promise<number> {
    return await this.disposalRepository.destroy({ where: { id } });
  }
  async deleteProductById(id: number): Promise<number> {
    return await this.disposalProductRepository.destroy({ where: { id } });
  }
}
