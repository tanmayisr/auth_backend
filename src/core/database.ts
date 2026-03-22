import mongoose from "mongoose";

export const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("Database connected");
  } catch (error) {
    console.log("Database error:", error);
    process.exit(1);
  }
};