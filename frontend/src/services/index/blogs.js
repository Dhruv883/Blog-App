import axios from "axios";

const getAllBlogs = async () => {
  try {
    const { data } = await axios.get(
      "https://blog-app-backend-sage.vercel.app/api/blog"
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message);
  }
};

const getBlog = async ({ id }) => {
  try {
    const { data } = await axios.get(
      `https://blog-app-backend-sage.vercel.app/api/blog/${id}`
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message);
  }
};

const deleteBlog = async ({ id, token }) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    await axios.delete(
      `https://blog-app-backend-sage.vercel.app/api/blog/${id}`,
      config
    );
  } catch (error) {
    if (error.response && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message);
  }
};

const createBlog = async ({ formData, token }) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "multipart/form-data",
      },
    };
    const { data } = await axios.post(
      `https://blog-app-backend-sage.vercel.app/api/blog/create`,
      formData,
      config
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message);
  }
};

export { getAllBlogs, getBlog, deleteBlog, createBlog };
