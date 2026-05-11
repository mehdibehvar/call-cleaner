"use client";
import useGlobalStore from "@/lib/stores/global-store";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "../button/button";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
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
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="soft"
      >
          <span className="text-2xl">{currentCountry.flag}</span>
        <ChevronDownIcon className="size-5" />
      </Button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden">
          <div className="max-h-72 overflow-y-auto">
            {COUNTRIES.map((country) => (
              <Button
                key={country.code}
                onClick={() => handleSelect(country.code)}
                variant={
                  country.code.toLowerCase() === countryCode.toLowerCase()
                    ? "surface"
                    : "ghost"
                }
                className={`w-full justify-start px-4 py-3 ${
                  country.code.toLowerCase() === countryCode.toLowerCase()
                    ? "border-l-4 border-l-blue-500"
                    : ""
                }`}
              >
                <span className="text-2xl">{country.flag}</span>
                <div className="flex-1 text-left">
                  <div className="font-medium">{country.name}</div>

                </div>
                {country.code.toLowerCase() === countryCode.toLowerCase() && (
                 <CheckIcon className="size-5"></CheckIcon>
                )}
              </Button>
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
