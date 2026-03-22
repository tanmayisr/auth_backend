import bcrypt from "bcrypt";

export const passwordCompare = async (
  password: string,
  hashed: string
) => {
  return bcrypt.compare(password, hashed);
};