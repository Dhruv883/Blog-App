import { verify } from "jsonwebtoken";
import User from "../models/User";

export const auth = async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const { id } = verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(id).select("-password");
      next();
    } catch (error) {
      let err = new Error("Not Authorized");
      err.statusCode = 401;
      next(err);
    }
  } else {
    let err = new Error("Not Authorized");
    err.statusCode = 401;
    next(err);
  }
};

export default auth;
