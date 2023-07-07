import axios from "axios";

export const signup = async ({ name, email, username, password }) => {
  try {
    const { data } = await axios.post(
      "http://localhost:5000/api/users/register",
      {
        name,
        email,
        username,
        password,
      }
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message);
  }
};

export const signin = async ({ username, password }) => {
  try {
    const { data } = await axios.post("http://localhost:5000/api/users/login", {
      username,
      password,
    });
    return data;
  } catch (error) {
    if (error.response && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message);
  }
};
