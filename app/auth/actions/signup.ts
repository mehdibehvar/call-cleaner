"use server";

import { pickFormData } from "@/utils/helpers";

const signup = async (state,formData) => {
  const payload = pickFormData(formData, [
    "name",
    "email",
    "password"
  ]);
    console.log("Signup payload:", payload);
};

export default signup;