import {
  Table,
  Column,
  Model,
  DataType,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Fbs } from './fbs.entity';
import { Organization } from '../../organizations/entities/organization.entity';

@Table
export class FbsOrder extends Model<FbsOrder> {
  @Column({
    type: DataType.JSON,
  })
  products: JSON;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  createdAt: Date;

  @BelongsTo(() => Fbs)
  fbs: Fbs;

  @ForeignKey(() => Fbs)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  fbsId: string;

  @BelongsTo(() => Organization)
  Organization;

  @ForeignKey(() => Organization)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  organizationId: number;
}
