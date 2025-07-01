import express from "express";
import auth from "../middleware/auth.js";
import {
  createBlog,
  deleteBlog,
  getBlog,
  getAllBlogs,
} from "../controllers/blogControllers.js";
import { uploadPicture } from "../middleware/uploadPicture.js";
const router = express.Router();

router.get("/", getAllBlogs);
router.post("/create", auth, uploadPicture.single("blogImage"), createBlog);
router.route("/:id").delete(auth, deleteBlog).get(getBlog);

export default router;
