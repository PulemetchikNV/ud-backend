import { Injectable, Inject } from '@nestjs/common';
import { Inventarization } from './entities/inventarization.entity';
import { inventarizationDto } from './dto/inventarization.dto';
import { INVENTARIZATION_REPOSITORY } from '../../constants';
@Injectable()
export class InventarizationService {
  constructor(
    @Inject(INVENTARIZATION_REPOSITORY)
    private readonly inventarizationRepository: typeof Inventarization,
  ) {}

  async create(inventarization: inventarizationDto): Promise<Inventarization> {
    return await this.inventarizationRepository.create<Inventarization>(
      inventarization,
    );
  }

  async findOneById(id: number): Promise<Inventarization> {
    return await this.inventarizationRepository.findOne<Inventarization>({
      where: { id },
    });
  }
  async findAll(): Promise<Inventarization[]> {
    return await this.inventarizationRepository.findAll();
  }

  async updateById(
    id: number,
    inventarization: inventarizationDto,
  ): Promise<[affectedCount: number]> {
    return await this.inventarizationRepository.update(inventarization, {
      where: { id },
    });
  }

  async deleteById(id: number): Promise<number> {
    return await this.inventarizationRepository.destroy({ where: { id } });
  }
}
