import Blog from "../models/Blog";
import { uploadPicture } from "../middleware/uploadPicture";

const createBlog = async (req, res, next) => {
  const { title, category, body, tags } = req.body;

  try {
    const imageName = req.file.filename;

    const blog = new Blog({
      title: title,
      body: JSON.parse(body),
      photo: imageName,
      user: req.user.id,
      tags: tags.split(",").slice(0, 8),
      category: category,
    });
    const createdBlog = await blog.save();
    return res.json(createdBlog);
  } catch (error) {
    next(error);
  }
};

const deleteBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findByIdAndDelete({ _id: req.params.id });

    if (!blog) {
      const error = new Error("Couldnt Find Blog");
      return next(error);
    }

    return res.json({
      message: "Blog Deleted Successfully",
    });
  } catch (error) {
    next(error);
  }
};

const getBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findOne({ _id: req.params.id }).populate([
      {
        path: "user",
        select: ["username", "name"],
      },
    ]);

    if (!blog) {
      const error = new Error("Couldnt Find Blog");
      return next(error);
    }

    res.json(blog);
  } catch (error) {
    next(error);
  }
};

const getAllBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.find({})
      .populate([
        {
          path: "user",
          select: ["username", "name"],
        },
      ])
      .sort({ createdAt: "desc" });

    return res.json(blogs);
  } catch (error) {
    next(error);
  }
};

const getuserBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.find({ user: req.user.id }).populate([
      {
        path: "user",
        select: ["username", "name"],
      },
    ]);

    return res.json(blogs);
  } catch (error) {
    next(error);
  }
};

export { createBlog, deleteBlog, getBlog, getAllBlogs, getuserBlogs };
