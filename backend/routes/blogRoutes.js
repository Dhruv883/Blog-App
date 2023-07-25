import express from "express";
import auth from "../middleware/auth";
import {
  createBlog,
  uploadBlogPicture,
  deleteBlog,
  updateBlog,
  getBlog,
  getAllBlogs,
} from "../controllers/blogControllers";
const router = express.Router();

router.get("/", getAllBlogs);
router.post("/upload", auth, uploadBlogPicture);
router.post("/create", auth, createBlog);
router
  .route("/:id")
  .put(auth, updateBlog)
  .delete(auth, deleteBlog)
  .get(getBlog);

export default router;
