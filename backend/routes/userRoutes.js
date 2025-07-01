import express from "express";
import { registerUser, loginUser } from "../controllers/userControllers.js";
import { getuserBlogs } from "../controllers/blogControllers.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", auth, getuserBlogs);

export default router;
