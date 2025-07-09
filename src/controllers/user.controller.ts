import { Request, Response } from 'express';
import { findAllUsers, findUserById, addUser } from '../services/user.service';



export const getUsers = (req: Request, res: Response) => {
    const users = findAllUsers();

    res.json(users);
}


export const getUserById = (req: Request, res: Response) => {

    const userId = parseInt(req.params.id);

    
    const user = findUserById(userId);

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: "User not found" });
    }
};


export const createUser = (req: Request, res: Response) => {
    const {name, email} = req.body;

    if(!name){
        return res.status(400).json({ message: "Name is required" });
    }

    if(!email){
        return res.status(400).json({ message: "Email is required" });
    }

    const newUser = addUser(name, email);

    res.status(201).json(newUser);


}