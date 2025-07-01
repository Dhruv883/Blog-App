import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import { errorHandler, invalidPathHandler } from "./middleware/errorHandler.js";
import userRoutes from "./routes/userRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.use(cors());

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
