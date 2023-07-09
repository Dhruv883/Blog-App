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

export { getAllBlogs, getBlog };
