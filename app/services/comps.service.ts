/*
در App Router:
fetch به‌صورت پیش‌فرض:
cache: 'force-cache'
یعنی Static-like behavior
مخصوصاً وقتی:
داخل Server Component باشه
یا خارج از کامپوننت تعریف شده باشه
*/

import { fetchApi } from "@/utils/fetch-api";

// export const fetchComps = fetch("http://localhost:3000/api/v1/company").then(
//   (res) => res.json()
// );

// correct way
// حالا:
// هر بار refresh
// هر request جدید
// دیتا مستقیم از دیتابیس میاد
// export async function fetchComps() {
//   const res = await fetch("http://localhost:3000/api/v1/company", {
//     cache: "no-store",
//   });

//   return res.json();
// }

///////////////////////////////////best way/////////
// صفحه Home با ISR رندر بشه
// دیتا از دیتابیس بیاد
// بعد از ایجاد / آپدیت شرکت:
// 👉 همون لحظه صفحه Home آپدیت بشه (بدون رفرش دستی)
// services/comps.ts
export async function fetchCompanies() {
  // const res = await fetch("http://localhost:3000/api/v1/company", {
  //   next: { tags:["companies"],revalidate: 60 }, // هر 60 ثانیه
  // });
  const res = await fetchApi({
    url: "/api/v1/company",
    next: {
      tags: ["companies"],
      revalidate: 60,
    },
  });
  return res.json();
}

////Best Practice نهایی 🏆

// 📄 لیست‌ها → ISR
// ✍️ create / update / delete → Server Action
// 🔄 بعدش → revalidatePath

export async function getCompany(id: string) {
  const res = await fetch(`http://localhost:3000/api/v1/company/${id}`, {
    cache: "no-store",
  });
  return res.json();
}
