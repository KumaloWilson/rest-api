import { Column, DataType, Model, Table, } from "sequelize-typescript";

@Table({
    tableName: 'users',
    timestamps: true,
})

export class User extends Model {

    @Column(
        {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        }
    )
    id!: number;


    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
    })
    name!: string;


    @Column(DataType.STRING)
    email!: string;


    @Column(DataType.NUMBER)
    age!: number;


    @Column(DataType.DATE)
    createdAt!: Date;

    @Column(DataType.DATE)
    updatedAt!: Date;

}