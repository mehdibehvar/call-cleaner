import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import winston from "winston";
export const userDTO = (user) => {
  return {
    name: user.name,
    phone: user.phone,
    email: user.email,
    roles: user.roles || [],
  };
};
export async function signUpAuth(req, res) {
  const { mobile, password, name, email, roles } = req.validatedBody;
  try {
    let user = await User.findOne({ mobile });
    // 1. If user does NOT exist, register first
    if (!user) {
      const hashedPassword = await bcrypt.hash(password, 10);

      user = new User({
        mobile,
        password: hashedPassword,
        name,
        email,
        roles,
      });

      await user.save();
    }
    // 2. If user exists, validate the password
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      // if user exists but password is wrong, reject
      return res.status(400).json({ message: "Invalid mobile or password" });
    }
    return res.status(200).json({
      name,
      roles,
      email,
      message: "you are registered,please login",
    });
  } catch (err) {
    winston.warn("passwordLoginController error: " + (err.message || err));
    return res.status(500).json({ message: "Server error" });
  }
}

export async function passwordLoginController(req, res) {
  const { mobile, password } = req.validatedBody;

  try {
    let user = await User.findOne({ mobile });
    // 1. If user does NOT exist, register first
    if (!user) {
      return res
        .status(400)
        .json({ message: "Invalid mobile please register first" });
    }
    // 2. If user exists, validate the password
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      // if user exists but password is wrong, reject
      return res.status(400).json({
        ok: false,
        errors: {
          password: "password is wrong",
        },
        status: 400,
      });
    }
    // 3. Issue token
    const token = user.generateAuthToken();
    const info = userDTO(user);
    return res.status(200).json({
      token,
      info,
    });
  } catch (err) {
    winston.warn("passwordLoginController error: " + (err.message || err));
    return res.status(500).json({ message: "Server error", err });
  }
}
