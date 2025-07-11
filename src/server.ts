import express, { Request, Response } from 'express';
// import userRoutes from './routes/users.routes';
import dotenv from 'dotenv';
import { connectToDatabase } from './config/database';

dotenv.config();

const app = express();

const PORT = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.json('Hello, World!');
});

// app.use('/users', userRoutes);


const startServer = async () => {
    try{
        await connectToDatabase();

        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    }

    catch (error){
        console.error('Error starting the server:', error);
    }
}



startServer();
