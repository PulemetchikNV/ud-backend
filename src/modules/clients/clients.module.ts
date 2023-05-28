import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { clientsProviders } from './clients.providers';
@Module({
  providers: [ClientsService, ...clientsProviders],
  exports: [ClientsService],
})
export class ClientsModule {}
