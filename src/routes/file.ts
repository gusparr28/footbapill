import { Router } from 'express';
const router = Router();

import multer from '../utils/multer';

import { uploadFileController } from '../controllers/fileController';

router.post('/file', multer.single('file'), uploadFileController);

export default router;