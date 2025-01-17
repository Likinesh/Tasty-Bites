import express from 'express';
import { user_reg, user_login } from '../controller/r_user.controller.js';
const router = express.Router();

// Define routes for user registration and login
router.post('/reg', user_reg);
router.post('/login', user_login);

export default router;