import express from "express";
import add_restro from '../controller/restaurents.js';
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.post('/add-restro',verifyToken,add_restro.add_restaurent);

export default router;