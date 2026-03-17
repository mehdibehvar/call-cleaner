"use client";
import useGlobalStore from "@/lib/stores/global-store";
import {  useRouter} from "next/navigation";


function SelectCountryCode() {
  const countryCode = useGlobalStore((s) => s.countryCode);
  const setCountryCode = useGlobalStore((s) => s.setCountryCode);
  const router = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountryCode(e.target.value);
  };

  return (
    <div>
      <p>Current country code: {countryCode}</p>
      <select value={countryCode.toLowerCase()} onChange={handleChange}>
        <option value="us">us</option>
        <option value="uk">uk</option>
      </select>
    </div>
  );
}

export default SelectCountryCode;
