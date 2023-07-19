import { Schema, model } from "mongoose";

const BlogSchema = new Schema(
  {
    title: { type: String, require: true },
    body: { type: Object, require: true },
    photo: { type: String, require: true },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    tags: { type: [String], require: true },
    category: { type: String, require: true },
  },
  { timestamps: true }
);

const Blog = model("Blog", BlogSchema);
export default Blog;
BlogSchema;
