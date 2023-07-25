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

const createBlog = async ({ title, image, category, body, tags, token }) => {
  const data = { title, image, category, body, tags };
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    await axios.post(`http://localhost:5000/api/blog/create`, data, config);
    return 0;
  } catch (error) {
    if (error.response && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message);
  }
};

export { getAllBlogs, getBlog, deleteBlog, createBlog };
