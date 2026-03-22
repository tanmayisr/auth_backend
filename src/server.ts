import dotenv from "dotenv";
dotenv.config();

import app from "./main";
import { connectDatabase } from "./core/database";

const PORT = process.env.PORT || 5001;

const startServer = async () => {
  await connectDatabase();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();