"use server";

import { Company, companySchemaValidation } from "@/backend/src/models/company";
import { validateJoi } from "../../backend/src/utils/validate-joi";
import { Icompany } from "../../../types/common";
import { revalidateTag } from "next/cache";
import { pickFormData } from "../../../_lib/utils/helpers";

export interface CreateCompanyState {
  success?: boolean;
  errors?: Record<string, string>;
  data?: Icompany;
  values?: Record<string, string | number | readonly string[] | undefined>;
  editing?: boolean;
}

export async function createCompany(
  ///the _ is a parameter name that means “I know this argument exists, but I’m not using it.”
  _: CreateCompanyState,
  formData: FormData,
): Promise<CreateCompanyState> {
  const payload = pickFormData(formData, [
    "name",
    "shortDescription",
    "longDescription",
    "thumbnail",
    "logo",
    "address",
    "phone",
  ]);
  console.log(payload);
  const result = validateJoi<Icompany>(companySchemaValidation.body, payload);

  if (!result.success) {
    return { errors: result.errors, values: payload };
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
    // data: {
    //   ...result.data,
    //   rating: 0,
    // },
  };
}

///راه‌حل استاندارد Next.js ✅

// باید بعد از Company.create(...) بگی:

// «این صفحه‌ها دیگه قدیمی‌ان»

// با revalidatePath یا revalidateTag.
