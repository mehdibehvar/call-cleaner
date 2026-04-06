
import { create } from 'zustand'

// interface IInitialGlobal {
//   countryCode: string;
//   setCountryCode: (code: string) => void;
//   dark: boolean;
//   toggleDark: () => void;
// }

const useGlobalStore  = create((set) => ({
  countryCode: "uk",
  setCountryCode: (code) => set({ countryCode: code }),
  dark: false,
  toggleDark: () => set((state) => ({ dark: !state.dark })),
}))


export default useGlobalStore;