"use server";

import { pickFormData } from "@/utils/helpers";

export interface ICreateDiscState {
  success: boolean;
  data:any
}
export const createPageDescriptiobsAction = async (
  _: ICreateDiscState,
  formData: FormData,
): Promise<ICreateDiscState> => {
  const payload=pickFormData(formData,["descs"])
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("somting lsfsdfjsdfj");
    }, 2000);
  });
    console.log(payload);

  return {
    success: true,
    data:payload
  };
};
