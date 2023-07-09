import { Schema, model } from "mongoose";
import { compare, hash } from "bcryptjs";
import { sign } from "jsonwebtoken";

const UserSchema = new Schema(
  {
    avatar: { type: String, default: "" },
    name: { type: String, require: true },
    email: { type: String, require: true },
    username: { type: String, require: true },
    password: { type: String, require: true },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await hash(this.password, 10);
  }
  return next();
});

UserSchema.methods.generateJWT = async function () {
  return await sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

UserSchema.methods.comparePassword = async function (password) {
  return await compare(password, this.password);
};

const User = model("User", UserSchema);
export default User;
