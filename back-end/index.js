import "dotenv/config";
import express from "express";
import UserRoutes from "./domains/users/routes.js";
import { connectDb } from "./config/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";

connectDb();

const app = express();
const { PORT } = process.env;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use("/users", UserRoutes);

app.listen(PORT, () => {
  console.log(`O servidor está na porta ${PORT}`);
});
