import {
  Table,
  Column,
  Model,
  DataType,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Fbo } from './fbo.entity';

@Table
export class Car extends Model<Car> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  number: string;

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
  dispatchDate: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  createdAt: Date;

  @BelongsTo(() => Fbo)
  Fbo;

  @ForeignKey(() => Fbo)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  fboId: number;
}
