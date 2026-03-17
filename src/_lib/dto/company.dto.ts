// domain model (mongoose) رو از UI contract جدا می‌کنی.

 export interface IcompanyDTO {
  id: string;
  name: string;
  shortDescription: string;
  thumbnail: string;
  logo: string;
  address: string;
  phone: string;
  createdAt: string;
  rating: number;
  longDescription: string;
  email: string;
  gallery: string[];
}
export const companyDTO = (company: any): IcompanyDTO => {
  return {
    id: company._id.toString(),
    name: company.name,
    shortDescription: company.shortDescription,
    thumbnail: company.thumbnail,
    logo: company.logo,
    address: company.address,
    phone: company.phone,
    createdAt: company.createdAt?.toISOString() ?? "",
    rating: company.rating,
    longDescription: company.longDescription,
    email: company.email,
    gallery: company.gallery || [],
  };
};


