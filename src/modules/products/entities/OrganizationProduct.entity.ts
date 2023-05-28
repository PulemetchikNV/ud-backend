import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  HasOne,
} from 'sequelize-typescript';
import { Organization } from '../../organizations/entities/organization.entity';
import { Product } from './product.entity';
import { Remnants } from '../../remnants/entities/remnants.entity';

@Table
export class OrganizationProduct extends Model<OrganizationProduct> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  barcode: string;

  @ForeignKey(() => Organization)
  @Column
  organizationId: number;

  @ForeignKey(() => Product)
  @Column
  productId: number;

  @HasOne(() => Remnants)
  Remnants;

  @ForeignKey(() => Remnants)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  remnantsId: number;
}
