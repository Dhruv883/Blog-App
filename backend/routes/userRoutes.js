import express from "express";
import {
  registerUser,
  loginUser,
  userProfile,
  updateProfile,
  updateProfilePicture,
} from "../controllers/userControllers";
import { getuserBlogs } from "../controllers/blogControllers";
import auth from "../middleware/auth";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
// router.get("/profile", auth, userProfile);
router.get("/profile", auth, getuserBlogs);
// router.put("/updateProfile", auth, updateProfile);
// router.put("/updateProfilePicture", auth, updateProfilePicture);

export default router;
