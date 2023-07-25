import express from "express";
import { registerUser, loginUser } from "../controllers/userControllers";
import { getuserBlogs } from "../controllers/blogControllers";
import auth from "../middleware/auth";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", auth, getuserBlogs);

export default router;
