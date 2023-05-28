import { Module } from '@nestjs/common';
import { OrganizationService } from './organizations.service';
import { organizationsProviders } from './organizations.providers';
import { OrganizationsController } from '../../controllers/organizations/organizations.controller';
@Module({
  providers: [OrganizationService, ...organizationsProviders],
  exports: [OrganizationService],
  controllers: [OrganizationsController],
})
export class OrganizationsModule {}
