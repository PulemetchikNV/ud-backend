import { Car } from './entities/car.entity';
import { Fbo } from './entities/fbo.entity';
import { Pallet } from './entities/pallet.entity';
import {
  CAR_REPOSITORY,
  FBO_REPOSITORY,
  PALLET_REPOSITORY,
} from '../../constants';

export const fboProviders = [
  {
    provide: CAR_REPOSITORY,
    useValue: Car,
  },
  {
    provide: FBO_REPOSITORY,
    useValue: Fbo,
  },
  {
    provide: PALLET_REPOSITORY,
    useValue: Pallet,
  },
];
