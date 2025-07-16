import { Request, Response } from "express";
import { register, login, findUserByID } from "../services/user.service";
import { parse } from "path";

export const registerUser = async (req: Request, res: Response) => {
    try {
        const {name, email, phone, password} = req.body;

        if(!name){
            return res.status(400).json({
                success: false,
                message: "Name is required",
            });
        }

        if(!email){
            return res.status(400).json({
                success: false,
                message: "Email is required",
            });
        }

        if(!phone){
            return res.status(400).json({
                success: false,
                message: "Phone is required",
            });
        }

        if(!password){
            return res.status(400).json({
                success: false,
                message: "Password is required",
            });
        }

        if(password.length < 6){
            return res.status(400).json({
                success: false,
                message: "Password must be at least 6 characters",
            });
        }


        const user = await register({name, email, phone, password});


        res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: user,
        });

    }
    catch(error){
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
}


export const loginUser = async (req: Request, res: Response) => {
    try {
        const {email, password} = req.body;

        if(!email){
            return res.status(400).json({
                success: false,
                message: "Email is required",
            });
        }


        if(!password){
            return res.status(400).json({
                success: false,
                message: "Password is required",
            });
        }

        const result = await login(email, password);

        res.status(200).json({
            success: true,
            message: "User logged in successfully",
            data: result,
        });

    }
    catch(error){
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
}

// export const getProfile = async (req: Request, res: Response) => {
//     try {
//         const userId = req.user;

//         if(!userId){
//             return res.status(400).json({
//                 success: false,
//                 message: "User not found",
//             });
//         }

//         const userProfile = await findUserByID(parseInt(userId.));

//         res.status(200).json({
//             success: true,
//             message: "User profile fetched successfully",
//             data: userProfile,
//         });
        
//     }

//     catch(error){
//         res.status(500).json({
//             success: false,
//             message: "Internal Server Error",
//         });
//     }
// }
