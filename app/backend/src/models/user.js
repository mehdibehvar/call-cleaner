import Joi from "joi";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import config from "config";

const { Schema, model } = mongoose;

export const userSchema = new Schema({
  mobile: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    minlength: 8,
    maxlength: 1024,
    required: true,
  },
  roles: {
    type: [String],
    default: ["client"],
    enum: ["admin", "client", "company"],
  },
  needsPassword: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    required: true,
  },
});
///information expert principle
userSchema.methods.generateAuthToken = function () {
  return jwt.sign(
    { _id: this._id, roles: this.roles },
    config.get("jwtPrivateKey")
  );
};
const User = model("User", userSchema);

const userSchemaValidation = {
  body: Joi.object({
    name: Joi.string().min(3).required().messages({
      "string.base": "Name must be a string",
      "string.empty": "Name cannot be empty",
      "string.min": "Name must be at least 3 characters long",
      "any.required": "Name is required"
    }),
    mobile: Joi.string().min(3).required().messages({
      "string.base": "Mobile must be a string",
      "string.empty": "Mobile cannot be empty",
      "string.min": "Mobile must be at least 3 characters long",
      "any.required": "Mobile is required"
    }),
    email: Joi.string().min(3).required().messages({
      "string.base": "Email must be a string",
      "string.empty": "Email cannot be empty",
      "string.min": "Email must be at least 3 characters long",
      "any.required": "Email is required"
    }),
    password: Joi.string().min(8).max(255).required().messages({
      "string.base": "Password must be a string",
      "string.empty": "Password cannot be empty",
      "string.min": "Password must be at least 8 characters long",
      "any.required": "Password is required",
    }),
    roles: Joi.array().items(Joi.string()).required().messages({
      "array.base": "Roles must be an array",
      "array.empty": "Roles cannot be empty",
      "array.includes": "Roles must include at least one of the following values: admin, client, company",
      "any.required": "Roles is required",
    }),
  }),
};

export { User, userSchemaValidation };
