import { Controller, Get } from '@nestjs/common';
import { OrganizationService } from '../../modules/organizations/organizations.service';
@Controller('organizations')
export class OrganizationsController {
  constructor(private readonly organizationService: OrganizationService) {}
  @Get('list')
  getList() {
    return this.organizationService.findAll();
  }
}
