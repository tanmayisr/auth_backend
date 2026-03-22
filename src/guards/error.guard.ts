import { Request, Response, NextFunction } from "express";

export const errorGuard = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(500).json({
    message: err.message || "Server Error"
  });
};