"use client";
import useGlobalStore from "@/lib/stores/global-store";
import { useRouter } from "next/navigation";
import { useState } from "react";

const COUNTRIES = [
  { code: "us", name: "United States", flag: "🇺🇸" },
  { code: "uk", name: "United Kingdom", flag: "🇬🇧" },
  { code: "ca", name: "Canada", flag: "🇨🇦" },
  { code: "au", name: "Australia", flag: "🇦🇺" },
  { code: "de", name: "Germany", flag: "🇩🇪" },
  { code: "fr", name: "France", flag: "🇫🇷" },
  { code: "jp", name: "Japan", flag: "🇯🇵" },
  { code: "in", name: "India", flag: "🇮🇳" },
];

function SelectCountryCode() {
  const countryCode = useGlobalStore((s) => s.countryCode);
  const setCountryCode = useGlobalStore((s) => s.setCountryCode);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const currentCountry = COUNTRIES.find(
    (c) => c.code.toLowerCase() === countryCode.toLowerCase()
  ) || COUNTRIES[0];

  const handleSelect = (code: string) => {
    setCountryCode(code);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full max-w-xs">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg font-medium text-gray-700 flex items-center justify-between hover:border-blue-400 hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <span className="flex items-center gap-3">
          <span className="text-2xl">{currentCountry.flag}</span>
          <span className="text-sm">{currentCountry.name}</span>
        </span>
        <svg
          className={`w-5 h-5 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden">
          <div className="max-h-72 overflow-y-auto">
            {COUNTRIES.map((country) => (
              <button
                key={country.code}
                onClick={() => handleSelect(country.code)}
                className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-colors duration-150 ${
                  country.code.toLowerCase() === countryCode.toLowerCase()
                    ? "bg-blue-50 border-l-4 border-blue-500 font-semibold text-blue-700"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                <span className="text-2xl">{country.flag}</span>
                <div className="flex-1">
                  <div className="font-medium">{country.name}</div>
                  <div className="text-xs text-gray-500 uppercase">{country.code}</div>
                </div>
                {country.code.toLowerCase() === countryCode.toLowerCase() && (
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}

export default SelectCountryCode;
