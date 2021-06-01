import { Request, Response } from "express";
import { buildResponse } from "../../utils";

export const handleIndex = async (req: Request, resp: Response) => {
    return buildResponse(resp, 200, '/', true);
}