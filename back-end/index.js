import "dotenv/config";
import express from "express";
import UserRoutes from "./domains/users/routes.js";
import { connectDb } from "./config/db.js";
import cors from "cors";

connectDb();

const app = express();
const { PORT } = process.env;

app.use(express.json());
app.use(cors());
app.use("/users", UserRoutes);

app.listen(PORT, () => {
  console.log(`O servidor está na porta ${PORT}`);
});
