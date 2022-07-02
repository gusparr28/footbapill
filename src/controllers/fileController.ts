import { Request, Response } from 'express';

export const uploadFileController = (req: Request, res: Response) => {
    const file = req.file;
    res.status(200).json({
        status: 200,
        message: 'File successfully uploaded',
        file
    });
};