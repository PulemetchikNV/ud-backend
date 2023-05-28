import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Marketplace extends Model<Marketplace> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  code: string;
}
