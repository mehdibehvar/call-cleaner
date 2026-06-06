import { create } from 'zustand'

/**
 * @typedef {Object} GlobalStore
 * @property {string} countryCode
 * @property {(code: string) => void} setCountryCode
 * @property {boolean} dark
 * @property {() => void} toggleDark
 */

const useGlobalStore = create((set) => ({
  countryCode: "US",
  setCountryCode: (code) => set({ countryCode: code }),
  dark: false,
  toggleDark: () => set((state) => ({ dark: !state.dark })),
}))

export default useGlobalStore;