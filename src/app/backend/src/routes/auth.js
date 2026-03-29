import express from "express";
import Joi from "joi";
import validate from "../utils/validate.js";
import {
  passwordLoginController,
  signUpAuth,
} from "../controllers/auth.controller.js";
import { userSchemaValidation } from "../models/user.js";

const authRouter = express.Router();


const passwordLoginSchema = {
  body: Joi.object({
    mobile: Joi.string().min(3).required(),
    password: Joi.string().min(8).required()
  }),
};

// register user or customer 
authRouter.post("/signup", validate(userSchemaValidation), signUpAuth);

// Password login
authRouter.post("/password-login", validate(passwordLoginSchema), passwordLoginController);

export default authRouter;
