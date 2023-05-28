import {
  Table,
  Column,
  Model,
  DataType,
  HasMany,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Role } from '../../../constants/role.enum';
import { Client } from '../../clients/entities/client.entity';
import { Organization } from '../../organizations/entities/organization.entity';

@Table
export class User extends Model<User> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.JSON,
    allowNull: false,
  })
  roles: Role[];

  @BelongsTo(() => Client)
  Client: Client;

  @ForeignKey(() => Client)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  clientId: number;

  @BelongsTo(() => Organization)
  Organization: Organization;

  @ForeignKey(() => Organization)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  organizationId: number;
}
