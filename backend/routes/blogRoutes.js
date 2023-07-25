import express from "express";
import auth from "../middleware/auth";
import {
  createBlog,
  deleteBlog,
  updateBlog,
  getBlog,
  getAllBlogs,
} from "../controllers/blogControllers";
import { uploadPicture } from "../middleware/uploadPicture";
const router = express.Router();

router.get("/", getAllBlogs);
router.post("/create", auth, uploadPicture.single("blogImage"), createBlog);
router
  .route("/:id")
  .put(auth, updateBlog)
  .delete(auth, deleteBlog)
  .get(getBlog);

export default router;
