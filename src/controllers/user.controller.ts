import { Request, Response } from "express";
import { getAllUsers, findUserByID, createUser, getUserByEmail, updateUser, deleteUser } from "../services/user.service";

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await getAllUsers();

        res.status(200).json(
            {
                success: true,
                message: "Users fetched successfully",
                data: users,
            }
        )
    }

    catch (error){
        console.error("Error getting Users" ,error);
        res.status(500).json(
            {
                success: false,
                message: "Internal  Server Error",
            }
        )
    }

}


export const getUserByID = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);

        if (isNaN(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid user ID",
            });
        }

        const user = await findUserByID(id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        res.status(200).json(
            {
                success: true,
                message: "User fetched successfully",
                data: user,
            }
        )
        
    }
    catch (error) {
        console.error("Error getting User" ,error);
        res.status(500).json(
            {
                success: false,
                message: "Internal  Server Error",
            }
        )
    }
}

export const addUser = async (req: Request, res: Response) => {
    try {
        const {name, age, email, } = req.body;

        if(!name || !age || !email){
            return res.status(400).json({
                success: false,
                message: "Invalid User data",
            });
        }

        const existingUser = await getUserByEmail(email);

        if(existingUser){
            return res.status(400).json({
                success: false,
                message: "User already exists",
            });
        }


        const newUser = await createUser({name, age, email, });


        res.status(201).json(
            {
                success: true,
                message: "User created successfully",
                data: newUser,
            }
        )

    }

    catch (error) {
        console.error("Error getting User" ,error);
        res.status(500).json(
            {
                success: false,
                message: "Internal  Server Error",
            }
        )
    }

}


export const updateUserById = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);

        const { name, age, email } = req.body;

        if (isNaN(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid user ID",
            });
        }
        const user = await findUserByID(id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        
        const updatedUser = await updateUser(id, { name, age, email });

        if(!updatedUser){
            return res.status(400).json({
                success: false,
                message: "Failed to update user",
            });
        }

        res.status(200).json(
            {
                success: true,
                message: "User updated successfully",
                data: updatedUser,
            }
        )
    }
    catch (error) {
        console.error("Error updating User" ,error);
        res.status(500).json(
            {
                success: false,
                message: "Internal  Server Error",
            }
        )
    }
}

export const deleteUserById = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid user ID",
            });
        }
        const user = await findUserByID(id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        await deleteUser(id);

        res.status(200).json(
            {
                success: true,
                message: "User deleted successfully",
            }
        );
    }

    catch (error) {
        console.error("Error deleting User" ,error);
        res.status(500).json(
            {
                success: false,
                message: "Internal  Server Error",
            }
        )
    }
}

