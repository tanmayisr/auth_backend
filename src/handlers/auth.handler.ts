import { Request, Response } from "express";
import { registerLogic, loginLogic } from "../logic/auth.logic";
import {
  createAccessToken,
  createRefreshToken
} from "../helpers/tokenGenerator";

export const registerHandler = async (req: Request, res: Response) => {
  try {
    const user = await registerLogic(req.body);

    res.status(201).json({
      message: "User registered",
      user
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const loginHandler = async (req: Request, res: Response) => {
  try {
    const user = await loginLogic(req.body);

    const accessToken = createAccessToken(user._id.toString());
    const refreshToken = createRefreshToken(user._id.toString());

    res.json({
      message: "Login successful",
      accessToken,
      refreshToken
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};