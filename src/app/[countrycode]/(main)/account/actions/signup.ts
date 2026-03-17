"use server";

import { User, userSchemaValidation } from "@/backend/src/models/user";
import { validateJoi } from "@/backend/src/utils/validate-joi";
import { pickFormData } from "@/utils/helpers";
import bcrypt from "bcrypt";
import winston from "winston";
interface Iuser {
  id: string;
  mobile?: string;
  email: string;
  password: string;
  roles?: string[];
  needsPassword?: boolean;
  name: string;
}
interface CreateUserState {
  success?: boolean;
  errors?: Record<string, string>;
  data?: {
    user: Pick<Iuser, "id" | "name" | "email" | "roles">;
    token: string;
  };
  values?: Record<string, string | number | readonly string[] | undefined>;
}
const signUpUser = async (
  _: CreateUserState,
  formData: FormData,
): Promise<CreateUserState> => {
  const payload = pickFormData(formData, [
    "name",
    "email",
    "password",
    "mobile",
    "roles",
  ]);
  console.log(payload);
  const result = validateJoi<Iuser>(userSchemaValidation.body, payload);
  console.log(result);
  if (!result.success) {
    return { errors: result.errors, values: payload };
  }
  try {
    let user = await User.findOne({ email: payload.email });

    // 1. If user does NOT exist, register first
    if (!user) {
      const hashedPassword = await bcrypt.hash(payload.password, 10);

      user = new User({
        name: payload.name,
        email: payload.email,
        password: hashedPassword,
        roles: payload.roles,
        mobile: payload.mobile,
      });

      await user.save();
    }

    // 2. If user exists, validate the password
    const isValid = await bcrypt.compare(payload.password, user.password);
    if (!isValid) {
      // if user exists but password is wrong, reject
      return {
        success: false,
        errors: {
          password: "Incorrect password",
        },
      };
    }

    // 3. Issue token
    const token = user.generateAuthToken();

    return {
      success: true,
      data: {
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      },
    };
  } catch (err) {
    // winston.warn("passwordLoginController error: " + (err.message || err));
    return { success: false, errors: { password: "Incorrect password" } };
  }
};

export default signUpUser;
