import express from "express";
import { User } from "../models/user.js";
import validate from "../utils/validate.js";
import mongoose from "mongoose";
import _ from "lodash";

import authMiddleware from "../middlewares/auth-middleware.js";
import Joi from "joi";
import {
  setPasswordController,
  changePasswordController,
} from "../controllers/users.controller.js";

const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

userRouter.get("/me", authMiddleware, async (req, res) => {
  const id = req.user._id;
  const user = await User.findById(id);
  res.status(200).json(user);
});

userRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  if (mongoose.Types.ObjectId.isValid(id)) {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } else {
    res.status(400).json({ message: "Invalid ID format" });
  }
});

// Set initial password (after OTP-created user). Authenticated route.
const setPasswordSchema = {
  body: Joi.object({ password: Joi.string().min(8).required() }),
};
userRouter.post(
  "/set-password",
  authMiddleware,
  validate(setPasswordSchema),
  setPasswordController
);

// Change password (authenticated). Requires currentPassword + newPassword.
const changePasswordSchema = {
  body: Joi.object({
    currentPassword: Joi.string().min(8).required(),
    newPassword: Joi.string().min(8).required(),
  }),
};
userRouter.post(
  "/change-password",
  authMiddleware,
  validate(changePasswordSchema),
  changePasswordController
);

export default userRouter;
