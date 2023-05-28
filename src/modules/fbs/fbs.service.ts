import { Injectable, Inject } from '@nestjs/common';
import { Fbs } from './entities/fbs.entity';
import { fbsDto } from './dto/fbs.dto';
import { FBS_REPOSITORY } from '../../constants';
@Injectable()
export class FbsService {
  constructor(
    @Inject(FBS_REPOSITORY)
    private readonly fbsRepository: typeof Fbs,
  ) {}

  async create(fbs: fbsDto): Promise<Fbs> {
    return await this.fbsRepository.create<Fbs>(fbs);
  }

  async findOneById(id: number): Promise<Fbs> {
    return await this.fbsRepository.findOne<Fbs>({
      where: { id },
    });
  }
  async findAll(): Promise<Fbs[]> {
    return await this.fbsRepository.findAll();
  }

  async updateById(id: number, fbs: fbsDto): Promise<[affectedCount: number]> {
    return await this.fbsRepository.update(fbs, {
      where: { id },
    });
  }

  async deleteById(id: number): Promise<number> {
    return await this.fbsRepository.destroy({ where: { id } });
  }
}
