export class AppError extends Error {
    public statusCode: number;
    public isOperational: boolean;

    constructor(message: string, statusCode: number,) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = true;

        // Set the prototype explicitly (only if available in the environment).
        if (typeof (Error as any).captureStackTrace === 'function') {
            (Error as any).captureStackTrace(this, this.constructor);
        }
    }
}