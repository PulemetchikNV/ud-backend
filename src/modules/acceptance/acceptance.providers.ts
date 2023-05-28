import { Acceptance } from './entities/acceptance.entity';
import { AcceptanceOrganizationProducts } from './entities/acceptanceOrganizationProducts.entity';
import {
  ACCEPTANCE_REPOSITORY,
  ACCEPTANCE_ORGANIZATION_PRODUCT_REPOSITORY,
} from '../../constants';

export const acceptanceProviders = [
  {
    provide: ACCEPTANCE_REPOSITORY,
    useValue: Acceptance,
  },
  {
    provide: ACCEPTANCE_ORGANIZATION_PRODUCT_REPOSITORY,
    useValue: AcceptanceOrganizationProducts,
  },
];
