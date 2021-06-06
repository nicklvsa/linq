import { Response } from "express";

interface JSONResponse {
    data: any;
    successful: boolean;
}

export const buildResponse = <T>(resp: Response, code: number, data: T, successful: boolean): Response => {
    const response: JSONResponse = {
        data: data,
        successful: successful,
    };

    return resp.status(code).json(response);
}