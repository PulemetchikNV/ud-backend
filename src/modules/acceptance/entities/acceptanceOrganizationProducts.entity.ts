import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { OrganizationProduct } from '../../products/entities/OrganizationProduct.entity';
import { Acceptance } from './acceptance.entity';

@Table
export class AcceptanceOrganizationProducts extends Model<AcceptanceOrganizationProducts> {
  @ForeignKey(() => OrganizationProduct)
  @Column
  organizationProductId: number;

  @ForeignKey(() => Acceptance)
  @Column
  acceptanceId: number;
}
