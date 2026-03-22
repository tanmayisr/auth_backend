import express from "express";
import {
  registerHandler,
  loginHandler
} from "../handlers/auth.handler";

const router = express.Router();

router.post("/register", registerHandler);
router.post("/login", loginHandler);

export default router;