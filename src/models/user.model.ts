import { BeforeCreate, Column, DataType, Model, Table } from "sequelize-typescript";
import bcrypt  from 'bcrypt';

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
    type: DataType.STRING,
    allowNull: false,
  })
  password!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  phone!: string;



  @BeforeCreate
  static async hashPassword(user: User) {
    const saltRounds = 10;

    user.password = await bcrypt.hash(user.password, saltRounds);
  }
}

//How hashing works
//1.Suppose your is Password1123
//2.You send it to the backend
//3.Backend hashes it using bcrypt
//4.Example password hash becomes $2b$10$h6s773ydh777288eneyb6ed6gencyhch3yyrccgnnhy6778842
