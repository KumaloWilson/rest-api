import express, { Request, Response } from 'express';
import userRoutes from './routes/users.routes';

const app = express();

const PORT = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.json('Hello, World!');
});

app.use('/users', userRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

