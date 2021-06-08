import { Request, Response } from "express";
import { Queue } from "../../entity/Queue";
import { buildResponse } from "../../utils";

export const handleQueue = async (req: Request, resp: Response) => {
    const { queue_id } = req.body;

    if (!queue_id) {
        return buildResponse<string>(resp, 404, 'unable to find your requested queue', false);
    }

    const response = await Queue.findOne({
        where: {
            queue_id: queue_id,
        },
    });

    if (!response) {
        return buildResponse<string>(resp, 404, 'unable to find your requested queue', false);
    }

    return buildResponse<Queue>(resp, 200, response, true);
};