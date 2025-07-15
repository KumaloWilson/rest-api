import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
  tableName: "users",
  timestamps: true, // This automatically adds createdAt and updatedAt
})
export class User extends Model<User> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,  // You probably want to enforce this
    unique: true,
  })
  email!: string;

  @Column({
    type: DataType.INTEGER, // Use INTEGER for numeric columns
    allowNull: false,
  })
  age!: number;

}
