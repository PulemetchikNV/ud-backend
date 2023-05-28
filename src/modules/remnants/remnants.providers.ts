import { Remnants } from './entities/remnants.entity';
import { REMNANTS_REPOSITORY } from '../../constants';

export const remnantsProviders = [
  {
    provide: REMNANTS_REPOSITORY,
    useValue: Remnants,
  },
];
