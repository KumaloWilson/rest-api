import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/error.utils";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    let error = { ...err };


    error.message = err.message;

    // Log to console for debugging
    console.error(err);

    // DEfault to 500 server error

    let statusCode = 500;
    let errorMessage = "Internal Server Error";

    //Handle custom
    if (err instanceof AppError){
        statusCode = err.statusCode;
        errorMessage = err.message;
    }


    if(err.name === "ValidationError"){
        statusCode = 400;
        errorMessage = "Validation Error";
    }


    if (err.name === "CastError") {
        statusCode = 400;
        errorMessage = `Resource not found. Invalid ID Format`;
    }


    res.status(statusCode).json({
        success: false,
        error: {
            message: errorMessage,
            statusCode: statusCode
        }
    })


}