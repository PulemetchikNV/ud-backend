import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE, DEVELOPMENT } from '../constants';
import { databaseConfig } from './database.config';

import { Client } from '../modules/clients/entities/client.entity';
import { User } from '../modules/users/entities/user.entity';
import { Marketplace } from '../modules/marketplaces/entities/marketplace.entity';
import { Organization } from '../modules/organizations/entities/organization.entity';
import { Warehouse } from '../modules/warehouses/entities/warehouse.entity';
import { Remnants } from '../modules/remnants/entities/remnants.entity';
import { Product } from '../modules/products/entities/product.entity';
import { OrganizationProduct } from '../modules/products/entities/OrganizationProduct.entity';

import { Acceptance } from '../modules/acceptance/entities/acceptance.entity';
import { AcceptanceOrganizationProducts } from '../modules/acceptance/entities/acceptanceOrganizationProducts.entity';
import { Inventarization } from '../modules/inventarization/entities/inventarization.entity';
import { Disposal } from '../modules/disposal/entities/disposal.entity';
import { DisposalProduct } from '../modules/disposal/entities/disposal_product.entity';
import { Fbo } from '../modules/fbo/entities/fbo.entity';
import { Pallet } from '../modules/fbo/entities/pallet.entity';
import { Car } from '../modules/fbo/entities/car.entity';
import { Fbs } from '../modules/fbs/entities/fbs.entity';
import { FbsOrder } from '../modules/fbs/entities/fbs_order.entity';
export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        // case TEST:
        //   config = databaseConfig.test;
        //   break;
        // case PRODUCTION:
        //   config = databaseConfig.production;
        //   break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);

      sequelize.addModels([
        Client,
        User,
        Marketplace,
        Organization,
        Warehouse,
        Remnants,
        Product,
        OrganizationProduct,
        Acceptance,
        AcceptanceOrganizationProducts,
        Inventarization,
        Disposal,
        DisposalProduct,
        Fbo,
        Pallet,
        Car,
        Fbs,
        FbsOrder,
      ]);

      await sequelize.sync();
      return sequelize;
    },
  },
];
