import {
  Table,
  Column,
  Model,
  DataType,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Car } from './car.entity';

@Table
export class Pallet extends Model<Pallet> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  status: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  barcode: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  createdAt: Date;

  @BelongsTo(() => Car)
  Car;

  @ForeignKey(() => Car)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  carId: number;
}
