import { Schema, model } from "mongoose";

const BlogCategorySchema = new Schema(
  {
    name: { type: String, require: true },
  },
  { timestamps: true }
);

const BlogCategory = model("BlogCategory", BlogCategorySchema);
export default BlogCategory;
