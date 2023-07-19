import Blog from "../models/Blog";
import { uploadPicture } from "../middleware/uploadPicture";
import { fileRemover } from "../utils/fileRemover";

const createBlog = async (req, res, next) => {
  try {
    const blog = new Blog({
      title: "Sample Title 4",
      body: {
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: [
              {
                type: "text",
                text: "Wow, this editor instance exports its content as JSON. ",
              },
              {
                type: "text",
                marks: [
                  {
                    type: "bold",
                  },
                ],
                text: "Wow, this editor instance exports its content as JSON.",
              },
              {
                type: "text",
                text: " ",
              },
              {
                type: "text",
                marks: [
                  {
                    type: "italic",
                  },
                ],
                text: "Wow, this editor instance exports its content as JSON.",
              },
              {
                type: "text",
                text: " ",
              },
              {
                type: "text",
                marks: [
                  {
                    type: "bold",
                  },
                  {
                    type: "italic",
                  },
                ],
                text: "Wow, this editor instance exports its content as JSON.",
              },
            ],
          },
        ],
      },
      photo: "event.jpg",
      user: req.user._id,
      tags: ["iOS", "Android", "Adventure"],
      category: "",
    });

    const createdBlog = await blog.save();
    return res.json(createdBlog);
  } catch (error) {
    next(error);
  }
};

const updateBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findById({ _id: req.params.id });
    if (!blog) {
      const error = new Error("Couldnt Find Blog");
      next(error);
      return;
    }

    const upload = uploadPicture.single("blogPicture");

    const handleData = async (data) => {
      const { title, body, tags, category } = await JSON.parse(data);
      blog.title = title || blog.title;
      blog.body = body || blog.body;
      blog.tags = tags || blog.tags;
      blog.category = category || blog.category;

      const updatedBlog = await blog.save();
      return res.json(updatedBlog);
    };

    upload(req, res, async function (err) {
      if (err) {
        const error = new Error("Unknown Error occurred when uploading");
        next(error);
      } else {
        if (req.file) {
          let filename;

          filename = blog.photo;

          if (filename) {
            fileRemover(filename);
          }

          blog.photo = req.file.filename;
          handleData(req.body.document);
        } else {
          let filename;

          filename = blog.photo;
          blog.photo = "";
          fileRemover(filename);
          handleData(req.body.document);
        }
      }
    });
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

    // const filter = req.query.searchKeyword;
    // let where = {};
    // if (filter) {
    //   const regexFilter = new RegExp(filter, "i");
    //   where.title = { $regex: regexFilter };
    // }
    // let query = Blog.find(where);
    // const page = parseInt(req.query.page || 1);
    // const pagesize = 10;
    // const skip = (page - 1) * pagesize;
    // const total = await Blog.countDocuments();
    // const pages = Math.ceil(total / pagesize);

    // if (page > pages) {
    //   return new Error("No Page Found");
    // }

    // const result = await query
    //   .skip(skip)
    //   .limit(pagesize)
    //   .populate([
    //     {
    //       path: "user",
    //       select: ["username", "name"],
    //     },
    //   ])
    //   .sort({ createdAt: "desc" });

    // res.header({
    //   "x-filter": filter,
    //   "x-totalcount": JSON.stringify(total),
    //   "x-currentpage": JSON.stringify(page),
    //   "x-pagesize": JSON.stringify(pagesize),
    //   "x-totalpagecount": JSON.stringify(pages),
    // });

    // return res.json(result);
  } catch (error) {
    next(error);
  }
};

const getuserBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.find({ user: req.user.id });

    return res.json(blogs);
  } catch (error) {
    next(error);
  }
};

export {
  createBlog,
  updateBlog,
  deleteBlog,
  getBlog,
  getAllBlogs,
  getuserBlogs,
};
