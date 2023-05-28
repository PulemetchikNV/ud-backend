import { Injectable, Inject } from '@nestjs/common';
import { Fbo } from './entities/fbo.entity';
import { fboDto } from './dto/fbo.dto';
import { FBO_REPOSITORY } from '../../constants';
@Injectable()
export class FboService {
  constructor(
    @Inject(FBO_REPOSITORY)
    private readonly fboRepository: typeof Fbo,
  ) {}

  async create(fbo: fboDto): Promise<Fbo> {
    return await this.fboRepository.create<Fbo>(fbo);
  }

  async findOneById(id: number): Promise<Fbo> {
    return await this.fboRepository.findOne<Fbo>({
      where: { id },
    });
  }
  async findAll(): Promise<Fbo[]> {
    return await this.fboRepository.findAll();
  }

  async updateById(id: number, fbo: fboDto): Promise<[affectedCount: number]> {
    return await this.fboRepository.update(fbo, {
      where: { id },
    });
  }

  async deleteById(id: number): Promise<number> {
    return await this.fboRepository.destroy({ where: { id } });
  }
}
