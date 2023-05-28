import { Organization } from './entities/organization.entity';
import { ORGANIZATION_REPOSITORY } from '../../constants';

export const organizationsProviders = [
  {
    provide: ORGANIZATION_REPOSITORY,
    useValue: Organization,
  },
];
