import express from "express";
import auth from "../middleware/auth";
import {
  createBlog,
  deleteBlog,
  updateBlog,
  getBlog,
  getAllBlogs,
} from "../controllers/blogControllers";
const router = express.Router();

router.route("/").post(auth, createBlog).get(getAllBlogs);
router
  .route("/:id")
  .put(auth, updateBlog)
  .delete(auth, deleteBlog)
  .get(getBlog);

export default router;
