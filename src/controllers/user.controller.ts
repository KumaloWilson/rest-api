import e, { Request, Response } from 'express';
import { findAllUsers, findUserById, addUser } from '../services/user.service';



export const getUsers = (req: Request, res: Response) => {
    const users = findAllUsers();

    if(users.length > 0){
        res.status(200).json({
            success: true,
            count: users.length,
            data: users,
        });
    }else{
        res.status(404).json({
            success: false,
            message: "No users found"
        })
    }

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