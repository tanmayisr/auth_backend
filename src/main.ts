import express from "express";
import cors from "cors";
import helmet from "helmet";
import authRoutes from "./endpoints/auth.routes";

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.get("/", (req, res) => {
  res.send("Secure Auth System Running");
});

app.use("/auth", authRoutes);

export default app;