import User from "../models/User.js";
// import { uploadPicture } from "../middleware/uploadPicture";
// import { fileRemover } from "../utils/fileRemover";

const registerUser = async (req, res, next) => {
  try {
    const { name, email, username, password } = req.body;

    let user = await User.findOne({ username });
    if (user) {
      throw new Error("Username already in use");
    }

    user = await User.findOne({ email });
    if (user) {
      throw new Error("Email already in use");
    }

    user = await User.create({
      name,
      email,
      username,
      password,
    });

    return res.status(201).json({
      _id: user._id,
      avatar: user.avatar,
      name: user.name,
      email: user.email,
      username: user.username,
      password: user.password,
      token: await user.generateJWT(),
    });
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    let user = await User.findOne({ username });
    if (!user) {
      throw new Error("User not found");
    }

    if (await user.comparePassword(password)) {
      return res.status(201).json({
        _id: user._id,
        avatar: user.avatar,
        name: user.name,
        email: user.email,
        username: user.username,
        token: await user.generateJWT(),
      });
    } else {
      throw new Error("Invalid Username or Password");
    }
  } catch (error) {
    next(error);
  }
};

export { registerUser, loginUser };
