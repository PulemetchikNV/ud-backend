import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Warehouse } from '../../warehouses/entities/warehouse.entity';
import { Organization } from '../../organizations/entities/organization.entity';

@Table
export class Inventarization extends Model<Inventarization> {
  @Column({
    type: DataType.STRING,
  })
  comment: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  status: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  type: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  createdAt: Date;

  @BelongsTo(() => Warehouse)
  Warehouse;

  @ForeignKey(() => Warehouse)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  warehouseId: number;

  @BelongsTo(() => Organization)
  Organization;

  @ForeignKey(() => Organization)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  organizationId: number;
}
