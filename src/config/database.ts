import { Sequelize } from 'sequelize-typescript';
import dotenv from "dotenv";
import { User } from '../models/user.model';

dotenv.config();

export const sequelize = new Sequelize({
    database: process.env.DB_NAME,
    dialect: "mysql",
    host: process.env.DB_HOST,
    port: parseInt("3306"),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    models: [User, ]
});

export const connectToDatabase = async () => {
    try {
        await sequelize.authenticate();

        await sequelize.sync();
        console.log("Database connection established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};