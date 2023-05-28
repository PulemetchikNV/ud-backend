import { Inventarization } from './entities/inventarization.entity';
import { INVENTARIZATION_REPOSITORY } from '../../constants';

export const inventarizationProviders = [
  {
    provide: INVENTARIZATION_REPOSITORY,
    useValue: Inventarization,
  },
];
