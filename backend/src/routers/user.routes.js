import express from "express";
import { signUp } from "../controllers/user.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/users/", authenticate, signUp);

export default router;