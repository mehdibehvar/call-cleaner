"use server";

import mongoose from "mongoose";
import { Company, companySchemaValidation } from "@/app/backend/src/models/company";
import { validateJoi } from "@/app/backend/src/utils/validate-joi";


interface CreateCompanyState {
  success?: boolean;
  errors?: Record<string, string>;
}

async function connectDB() {
  if (mongoose.connection.readyState === 1) return;

  await mongoose.connect(process.env.MONGODB_URI!);
}

export async function createCompany(
  _: CreateCompanyState,
  formData: FormData
): Promise<CreateCompanyState> {
  await connectDB();

  const payload = {
    name: formData.get("name"),
    shortDescription: formData.get("shortDescription"),
    longDescription: formData.get("longDescription"),
    thumbnail: formData.get("thumbnail"),
    logo: formData.get("logo"),
    address: formData.get("address"),
    phone: formData.get("phone"),
  };

  const result = validateJoi(
    companySchemaValidation.body,
    payload
  );

  if (!result.success) {
    return { errors: result.errors };
  }

  await Company.create(result.data);

  return { success: true };
}
