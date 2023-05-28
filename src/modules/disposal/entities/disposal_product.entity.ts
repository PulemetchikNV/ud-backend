import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Disposal } from './disposal.entity';

@Table
export class DisposalProduct extends Model<DisposalProduct> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  status: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  comment: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  barcode: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  count: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  createdAt: Date;

  @BelongsTo(() => Disposal)
  Disposal;
  @ForeignKey(() => Disposal)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  disposalId: number;
}
