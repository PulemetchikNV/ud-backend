import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Client extends Model<Client> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
}
