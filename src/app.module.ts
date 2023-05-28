import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { DatabaseModule } from './database/database.module';

import { RolesGuard } from './guards/roles/roles.guard';
import { OrganizationsModule } from './modules/organizations/organizations.module';
import { ClientsModule } from './modules/clients/clients.module';
import { WarehousesModule } from './modules/warehouses/warehouses.module';
import { ProductsModule } from './modules/products/products.module';
import { RemnantsModule } from './modules/remnants/remnants.module';
import { AcceptanceModule } from './modules/acceptance/acceptance.module';
import { InventarizationModule } from './modules/inventarization/inventarization.module';
import { DisposalModule } from './modules/disposal/disposal.module';
import { FboModule } from './modules/fbo/fbo.module';
import { FbsModule } from './modules/fbs/fbs.module';
import { UsersController } from './controllers/users/users.controller';
import { AuthModule } from './modules/auth/auth.module';
import { AuthController } from './controllers/auth/auth.controller';
import { AcceptanceController } from './controllers/acceptance/acceptance.controller';
import { OrganizationsController } from './controllers/organizations/organizations.controller';
import { WarehousesController } from './controllers/warehouses/warehouses.controller';
@Module({
  imports: [
    DatabaseModule,
    OrganizationsModule,
    ClientsModule,
    WarehousesModule,
    ProductsModule,
    RemnantsModule,
    AcceptanceModule,
    InventarizationModule,
    DisposalModule,
    FboModule,
    FbsModule,
    AuthModule,
  ],
  controllers: [AppController, UsersController, AuthController, AcceptanceController, OrganizationsController, WarehousesController],
  providers: [
    AppService,
    {
      provide: 'APP_GUARD',
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
