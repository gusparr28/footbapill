import { Router } from 'express';
const router = Router();

import { signUpController, signInController } from '../controllers/authController';

router.post('/signup', signUpController);
router.post('/signin', signInController);

export default router;