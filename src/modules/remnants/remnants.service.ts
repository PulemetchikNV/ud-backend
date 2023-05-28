import { Injectable, Inject } from '@nestjs/common';
import { Remnants } from './entities/remnants.entity';
import { remnantsDto } from './dto/remnants.dto';
import { REMNANTS_REPOSITORY } from '../../constants';
@Injectable()
export class RemnantsService {
  constructor(
    @Inject(REMNANTS_REPOSITORY)
    private readonly remnantsRepository: typeof Remnants,
  ) {}

  async create(remnants: remnantsDto): Promise<Remnants> {
    return await this.remnantsRepository.create<Remnants>(remnants);
  }

  async findOneById(id: number): Promise<Remnants> {
    return await this.remnantsRepository.findOne<Remnants>({
      where: { id },
    });
  }
  async findAll(): Promise<Remnants[]> {
    return await this.remnantsRepository.findAll();
  }

  async updateById(
    id: number,
    remnants: remnantsDto,
  ): Promise<[affectedCount: number]> {
    return await this.remnantsRepository.update(remnants, {
      where: { id },
    });
  }

  async deleteById(id: number): Promise<number> {
    return await this.remnantsRepository.destroy({ where: { id } });
  }
}
