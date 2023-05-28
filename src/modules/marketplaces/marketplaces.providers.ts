import { Marketplace } from './entities/marketplace.entity';
import { MARKETPLACE_REPOSITORY } from '../../constants';

export const marketplacesProviders = [
  {
    provide: MARKETPLACE_REPOSITORY,
    useValue: Marketplace,
  },
];
