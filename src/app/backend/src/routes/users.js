import express from "express";
import { User, userSchemaValidation } from "../models/user.js";
import validate from "../utils/validate.js";
import mongoose from "mongoose";
import _ from "lodash";

import authMiddleware from "../middlewares/auth-middleware.js";
import Joi from "joi";
import {
  setPasswordController,
  changePasswordController,
  updateUserNameController,
  updateUserEmailController,
  updateUserController,
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
  setPasswordController,
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
  changePasswordController,
);
const updateNameSchema = {
  body: Joi.object({
    name: Joi.string().min(3).required().messages({
      "string.base": "Name must be a string",
      "string.empty": "Name cannot be empty",
      "string.min": "Name must be at least 3 characters long",
      "any.required": "Name is required",
    }),
  }),
};
userRouter.put(
  "/update-name",
  authMiddleware,
  validate(updateNameSchema),
  updateUserNameController,
);
const updateEmailSchema = {
  body: Joi.object({
    email: Joi.string().min(3).required().messages({
      "string.base": "Email must be a string",
      "string.empty": "Email cannot be empty",
      "string.min": "Email must be at least 3 characters long",
      "any.required": "Email is required",
    }),
  }),
};
userRouter.put(
  "/update-email",
  authMiddleware,
  validate(updateEmailSchema),
  updateUserEmailController,
);
const updateUserSchema = {
  body: Joi.object({
    name: Joi.string().min(3).required().messages({
      "string.base": "Name must be a string",
      "string.empty": "Name cannot be empty",
      "string.min": "Name must be at least 3 characters long",
      "any.required": "Name is required",
    }),
    mobile: Joi.string().min(3).required().messages({
      "string.base": "Mobile must be a string",
      "string.empty": "Mobile cannot be empty",
      "string.min": "Mobile must be at least 3 characters long",
      "any.required": "Mobile is required",
    }),
    email: Joi.string().min(3).required().messages({
      "string.base": "Email must be a string",
      "string.empty": "Email cannot be empty",
      "string.min": "Email must be at least 3 characters long",
      "any.required": "Email is required",
    }),
  }),
};
userRouter.put(
  "/update-user",
  authMiddleware,
  validate(updateUserSchema),
  updateUserController,
);
export default userRouter;
