import { Injectable, Inject } from '@nestjs/common';
import { Organization } from './entities/organization.entity';
import { organizationDto } from './dto/organization.dto';
import { ORGANIZATION_REPOSITORY } from '../../constants';
@Injectable()
export class OrganizationService {
  constructor(
    @Inject(ORGANIZATION_REPOSITORY)
    private readonly organizationRepository: typeof Organization,
  ) {}

  async create(organization: organizationDto): Promise<Organization> {
    return await this.organizationRepository.create<Organization>(organization);
  }

  async findOneById(id: number): Promise<Organization> {
    return await this.organizationRepository.findOne<Organization>({
      where: { id },
    });
  }
  async findAll(): Promise<Organization[]> {
    return await this.organizationRepository.findAll();
  }

  async updateById(
    id: number,
    organization: organizationDto,
  ): Promise<[affectedCount: number]> {
    return await this.organizationRepository.update(organization, {
      where: { id },
    });
  }

  async deleteById(id: number): Promise<number> {
    return await this.organizationRepository.destroy({ where: { id } });
  }
}
