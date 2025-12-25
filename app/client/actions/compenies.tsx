"use server";

import { Company } from "@/backend/src/models/company";
import mongoose from "mongoose";

async function connectDB() {
  if (mongoose.connection.readyState === 1) return;

  await mongoose.connect(process.env.MONGODB_URI!);
}

export interface CompanyDTO {
  _id: string;
  name: string;
  shortDescription: string;
  thumbnail: string;
  logo: string;
  address: string;
  phone: string;
  createdAt: Date;
  rating: number;
  longDescription: string;
  email: string;
}

export async function getCompaniesaction(): Promise<CompanyDTO[]> {
  await connectDB();

  const companies = await Company.find().sort({ createdAt: -1 }).lean();

  return companies.map((company) => (companyDTO(company)));
}


const companyDTO=(company:any)=>{
  return {
    _id: company._id.toString(),
    name: company.name,
    shortDescription: company.shortDescription,
    thumbnail: company.thumbnail,
    logo: company.logo,
    address: company.address,
    phone: company.phone,
    rating: company.rating,
    longDescription: company.longDescription,
    email: company.email,
  }
} 