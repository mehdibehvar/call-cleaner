import { Company } from "@/backend/src/models/company";
import connectDB from "./db";
import { companyDTO, IcompanyDTO } from "./dto/company.dto";
interface ISearchParams {
  page: number;
  limit: number;
  sort?: string;
  search?: string;
  city?: string;
}
const getCompaniesAdvanced = async ({
  page,
  limit,
  sort,
  search,
  city,
}: ISearchParams): Promise<{
  companies: IcompanyDTO[];
  totalPages: number;
}> => {
  await connectDB();
  const filter: any = {};
  if (search) {
    filter.name = { $regex: search, $options: "i" };
  }
  if (city) {
    filter.city = { $regex: city, $options: "i" };
  }
  let sortQuery: any = { createdAt: -1 };
  if (sort === "rating_desc") sortQuery = { rating: -1 };
  if (sort === "rating_asc") sortQuery = { rating: 1 };
  if (sort === "created_asc") sortQuery = { createdAt: 1 };
  if (sort === "created_desc") sortQuery = { createdAt: -1 };

  const skip = (page - 1) * limit;
  const [companies, total] = await Promise.all([
    Company.find(filter).skip(skip).limit(limit).sort(sortQuery).lean() ,
    Company.countDocuments(filter),
  ]);
  return {
    companies: companies.map(companyDTO),
    totalPages: Math.ceil(total / limit),
  };
};

export default getCompaniesAdvanced;
/*
| نیاز            | راه درست                 |
| --------------- | ------------------------ |
| فقط نمایش لیست  | Server Component + DB    |
| فرم / mutation  | Server Action            |
| client + server | API + fetch              |
| ISR / caching   | fetch                    |
| real-time UI    | client fetch / websocket |
Server Action برای تغییر داده‌ست
Server Component برای خواندن داده‌ست
*/