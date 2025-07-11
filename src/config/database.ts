import { Sequelize } from 'sequelize-typescript';
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize({
    database: 'bootcamp_db',
    dialect: "mysql",
    host: 'localhost',
    port: parseInt("3306"),
    username: 'root',
    password: 'Wily0734?',
    // models: []
});

export const connectToDatabase = async () => {
    try {
        await sequelize.authenticate();

        console.log("Database connection established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};