import { z } from "zod";

export const registerValidator = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  password: z.string().min(6)
});

export const loginValidator = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});