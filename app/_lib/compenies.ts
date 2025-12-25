

import { Company } from "@/backend/src/models/company";
import connectDB from "./db";
import { IcompanyDTO, companyDTO } from "./dto/company.dto";

export async function getCompanies(): Promise<IcompanyDTO[]> {
  await connectDB();
  const companies = await Company.find().sort({ createdAt: -1 }).lean();
  return companies.map((company) => companyDTO(company));
}

