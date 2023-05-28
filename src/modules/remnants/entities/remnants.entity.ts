import {
  Table,
  Column,
  Model,
  DataType,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { OrganizationProduct } from '../../products/entities/OrganizationProduct.entity';
import { Warehouse } from '../../warehouses/entities/warehouse.entity';

@Table
export class Remnants extends Model<Remnants> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantity_available: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantity_defect: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantity_fbs: number;

  @BelongsTo(() => OrganizationProduct)
  OrganizationProduct;

  @ForeignKey(() => OrganizationProduct)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  organizationProductId: number;

  @BelongsTo(() => Warehouse)
  Warehouse;

  @ForeignKey(() => Warehouse)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  warehouseId: number;
}
