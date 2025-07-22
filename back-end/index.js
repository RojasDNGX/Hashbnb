import "dotenv/config";
import express from "express";
import UserRoutes from "./domains/users/routes.js";
import { connectDb } from "./config/db.js";

connectDb();

const app = express();
const { PORT } = process.env;

app.use(express.json());
app.use("/users", UserRoutes);

app.listen(PORT, () => {
  console.log(`O servidor está na porta ${PORT}`);
});
