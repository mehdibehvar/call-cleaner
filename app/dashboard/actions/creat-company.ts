"use server";

import mongoose from "mongoose";
import { Company, companySchemaValidation } from "@/backend/src/models/company";
import { validateJoi } from "@/backend/src/utils/validate-joi";
import { Icompany } from "@/types/common";
import { revalidateTag } from "next/cache";
import { pickFormData } from "@/utils/helpers";

export interface CreateCompanyState {
  success?: boolean;
  errors?: Record<string, string>;
  data?: Icompany;
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

  const payload = pickFormData(formData, [
    "name",
    "shortDescription",
    "longDescription",
    "thumbnail",
    "logo",
    "address",
    "phone",
    "rating",
  ]);
  const result = validateJoi<Icompany>(companySchemaValidation.body, payload);

  if (!result.success) {
    return { errors: result.errors };
  }

  await Company.create({
    ...result.data,
    rating: 0,
  });
  // 🔥 مهم‌ترین خط
  // revalidatePath("/"); // Home
  // revalidatePath("/dashboard/company"); // اگه داشبورد هم لیست داره
  revalidateTag("companies", "max");
  return {
    success: true,
    data: {
      ...result.data,
      rating: 0,
    },
  };
}

///راه‌حل استاندارد Next.js ✅

// باید بعد از Company.create(...) بگی:

// «این صفحه‌ها دیگه قدیمی‌ان»

// با revalidatePath یا revalidateTag.
