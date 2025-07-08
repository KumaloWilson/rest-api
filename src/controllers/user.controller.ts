import { Request, Response } from 'express';
import { findAllUsers } from '../services/user.service';



export const getUsers = (req: Request, res: Response) => {
    const users = findAllUsers();

    res.json(users);
}