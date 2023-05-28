import { Injectable, Inject } from '@nestjs/common';
import { Client } from './entities/client.entity';
import { ClientDto } from './dto/client.dto';
import { CLIENT_REPOSITORY } from '../../constants';

@Injectable()
export class ClientsService {
  constructor(
    @Inject(CLIENT_REPOSITORY)
    private readonly clientRepository: typeof Client,
  ) {}

  async create(client: ClientDto): Promise<Client> {
    return await this.clientRepository.create<Client>(client);
  }

  async findOneById(id: number): Promise<Client> {
    return await this.clientRepository.findOne<Client>({
      where: { id },
    });
  }
  async findAll(): Promise<Client[]> {
    return await this.clientRepository.findAll();
  }

  async updateById(
    id: number,
    client: ClientDto,
  ): Promise<[affectedCount: number]> {
    return await this.clientRepository.update(client, {
      where: { id },
    });
  }

  async deleteById(id: number): Promise<number> {
    return await this.clientRepository.destroy({ where: { id } });
  }
}
