"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFileController = void 0;
exports.uploadFileController = (req, res) => {
    const file = req.file;
    res.status(200).json({
        status: 200,
        message: 'File successfully uploaded',
        file
    });
};
