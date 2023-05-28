import { Inject, Injectable } from '@nestjs/common';
import { Acceptance } from './entities/acceptance.entity';
import { ACCEPTANCE_REPOSITORY } from '../../constants';
import { AcceptanceDto } from './dto/acceptance.dto';
@Injectable()
export class AcceptanceService {
  constructor(
    @Inject(ACCEPTANCE_REPOSITORY)
    private readonly acceptanceRepository: typeof Acceptance,
  ) {}

  async create(acceptance: AcceptanceDto): Promise<Acceptance> {
    return await this.acceptanceRepository.create<Acceptance>(acceptance);
  }

  async findOneById(id: number) {
    const acceptance = await this.acceptanceRepository.findOne<Acceptance>({
      where: { id },
    });
    return acceptance;
  }
  async findAll(): Promise<Acceptance[]> {
    return await this.acceptanceRepository.findAll();
  }

  async updateById(
    id: number,
    acceptance: AcceptanceDto,
  ): Promise<[affectedCount: number]> {
    return await this.acceptanceRepository.update(acceptance, {
      where: { id },
    });
  }

  async deleteById(id: number): Promise<number> {
    return await this.acceptanceRepository.destroy({ where: { id } });
  }
}
