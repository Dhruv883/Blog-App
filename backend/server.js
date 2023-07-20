import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/db";
import { errorHandler, invalidPathHandler } from "./middleware/errorHandler";
import userRoutes from "./routes/userRoutes";
import blogRoutes from "./routes/blogRoutes";

dotenv.config();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/api/users", userRoutes);
app.use("/api/blog", blogRoutes);
app.use(invalidPathHandler);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log("Server is listening on port " + PORT);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
