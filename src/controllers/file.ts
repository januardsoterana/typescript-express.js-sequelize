import { Request, Response } from 'express';

export const upload = async (
    req: Request,
    res: Response,
): Promise<Response> => {
    return res.status(200);
};

export const download_by_id = async (
    req: Request,
    res: Response,
): Promise<Response> => {
    return res.status(200);
};
