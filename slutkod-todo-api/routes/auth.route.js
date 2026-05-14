import { Router } from 'express';
import { registerUser, loginUser } from '../controllers/auth.controller.js';
import { validateUserBody } from '../middlewares/validate.middleware.js';

const router = Router();

// POST register user
router.post('/register', validateUserBody, registerUser);

// POST login user
router.post('/login', validateUserBody, loginUser);

export default router;