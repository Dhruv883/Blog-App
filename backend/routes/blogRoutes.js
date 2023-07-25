import express from "express";
import auth from "../middleware/auth";
import {
  createBlog,
  deleteBlog,
  getBlog,
  getAllBlogs,
} from "../controllers/blogControllers";
import { uploadPicture } from "../middleware/uploadPicture";
const router = express.Router();

router.get("/", getAllBlogs);
router.post("/create", auth, uploadPicture.single("blogImage"), createBlog);
router.route("/:id").delete(auth, deleteBlog).get(getBlog);

export default router;
