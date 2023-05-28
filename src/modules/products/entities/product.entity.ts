import {
  Table,
  Column,
  Model,
  DataType,
  BelongsTo,
  ForeignKey,
  BelongsToMany,
} from 'sequelize-typescript';
import { Organization } from '../../organizations/entities/organization.entity';
import { OrganizationProduct } from './OrganizationProduct.entity';
@Table
export class Product extends Model<Product> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.INTEGER,
  })
  weight: number;

  @Column({
    type: DataType.INTEGER,
  })
  volume: number;

  @BelongsToMany(() => Organization, () => OrganizationProduct)
  organizations: Organization[];
}
