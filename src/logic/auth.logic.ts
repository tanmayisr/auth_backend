import User from "../schemas/user.schema";
import { passwordHash } from "../helpers/passwordHash";
import { passwordCompare } from "../helpers/passwordCompare";

export const registerLogic = async (data: any) => {
  const { name, email, phone, password } = data;

  // Check if user already exists
  const existingUser = await User.findOne({
    $or: [{ email }, { phone }]
  });

  if (existingUser) {
    throw new Error("User already exists");
  }

  // Hash password
  const hashedPassword = await passwordHash(password);

  // Create user
  const user = await User.create({
    name,
    email,
    phone,
    password: hashedPassword
  });

  return user;
};

export const loginLogic = async (data: any) => {
  const { email, password } = data;

  // Find user
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("User not found");
  }

  // Compare password
  const isMatch = await passwordCompare(password, user.password);

  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  return user;
};