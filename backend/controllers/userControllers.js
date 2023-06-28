import User from "../models/User";

export const registerUser = async (req, res) => {
  try {
    const { name, email, username, password } = req.body;
    let user = await User.findOne({ $or: [{ username }, { email }] });

    if (user) {
      return res
        .status(400)
        .json({ message: "Username or email already in use" });
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
      admin: user.admin,
      token: await user.generateJWT(),
    });
  } catch (error) {
    return res.status(500).json({ message: "Something Went Wrong" });
  }
};
