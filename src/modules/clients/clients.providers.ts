import { Client } from './entities/client.entity';
import { CLIENT_REPOSITORY } from '../../constants';

export const clientsProviders = [
  {
    provide: CLIENT_REPOSITORY,
    useValue: Client,
  },
];
