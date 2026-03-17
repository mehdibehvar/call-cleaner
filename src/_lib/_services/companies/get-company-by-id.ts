import { Company } from "@/backend/src/models/company";
import connectDB from "../../../_lib/db";
import { companyDTO, type IcompanyDTO } from "../../../_lib/dto/company.dto";

const getCompany = async (id: string): Promise<IcompanyDTO | null> => {
  await connectDB();
  const data = await Company.findOne({ _id: id }).lean();
  if (!data) return null;
  return companyDTO(data);
};

export { getCompany };

/*
برای صفحه یک شرکت خاص:

✅ بهترین انتخاب در 90٪ موارد
👉 Server Component + direct DB access (یا server function در lib)

⛔ فقط در این موارد برو سراغ API + fetch:

نیاز به reuse توسط mobile app / external service داری

صفحه client-side navigation سنگین داره (polling / refetch)

SSR برات مهم نیست
*/
