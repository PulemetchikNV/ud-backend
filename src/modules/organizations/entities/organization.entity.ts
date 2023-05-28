import {
  Table,
  Column,
  Model,
  DataType,
  BelongsToMany,
} from 'sequelize-typescript';
import { Product } from '../../products/entities/product.entity';
import { OrganizationProduct } from '../../products/entities/OrganizationProduct.entity';

@Table
export class Organization extends Model<Organization> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @BelongsToMany(() => Product, () => OrganizationProduct)
  products: Product[];
}
