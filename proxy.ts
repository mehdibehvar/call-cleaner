import { NextRequest, NextResponse } from "next/server";

const countryToLocale: Record<string, string> = {
  TR: "tr",
  DE: "de",
  FR: "fr",
  GB: "en-gb",
  US: "en",
};

export function proxy(req: NextRequest) {
  const country = req.headers.get("x-vercel-ip-country") || "US";
  const locale = countryToLocale[country] || countryToLocale.US;

  const url = req.nextUrl.clone();

  // Skip if locale already exists
  const hasLocale =
    url.pathname.startsWith("/tr") ||
    url.pathname.startsWith("/de") ||
    url.pathname.startsWith("/fr") ||
    url.pathname.startsWith("/en-gb");

  if (!hasLocale) {
    url.pathname = `/${locale}${url.pathname}`;

    return NextResponse.redirect(url);
  }

  const response = NextResponse.next();

  // Save country + currency
  response.cookies.set("country", country);

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
