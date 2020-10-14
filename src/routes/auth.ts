import { Router } from 'express';
const router = Router();

import { signUpController } from '../controllers/authController';

router.post('/signup', signUpController);

export default router;