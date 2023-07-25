import axios from "axios";

const getAllBlogs = async () => {
  try {
    const { data } = await axios.get("http://localhost:5000/api/blog");
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
    const { data } = await axios.get(`http://localhost:5000/api/blog/${id}`);
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
    await axios.delete(`http://localhost:5000/api/blog/${id}`, config);
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
    await axios.post(`http://localhost:5000/api/blog/create`, formData, config);
  } catch (error) {
    if (error.response && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message);
  }
};

export { getAllBlogs, getBlog, deleteBlog, createBlog };
