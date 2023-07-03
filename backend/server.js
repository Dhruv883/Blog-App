import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/db";
import { errorHandler, invalidPathHandler } from "./middleware/errorHandler";
import userRoutes from "./routes/userRoutes";

dotenv.config();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.use("/api/users", userRoutes);
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
