import { Module } from '@nestjs/common';
import { RemnantsService } from './remnants.service';
import { remnantsProviders } from './remnants.providers';
@Module({
  providers: [RemnantsService, ...remnantsProviders],
  exports: [RemnantsService],
})
export class RemnantsModule {}
