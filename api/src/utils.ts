import { Response } from "express";

interface JSONResponse {
    message: string;
    successful: boolean;
}

export const buildResponse = (resp: Response, code: number, message: string, successful: boolean): Response => {
    const response: JSONResponse = {
        message: message,
        successful: successful,
    };

    return resp.status(code).json(response);
}