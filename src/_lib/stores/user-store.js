
import { create } from 'zustand'

const useUserStore = create((set) => ({
  user: {
    favorites: [],
    name: '',
    email: '',
    phone: '',
  },
  setUser: (user) => set({ user }),
  setFavorites: (favorite) => set({user:{...user,favorites:[...us]}})
}));
