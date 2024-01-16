import { create } from "zustand";

type User = {
  name: string;
  email: string;
  image: string;
  accessToken: string;
  refreshToken: string;
  accessTokenExpires: number;
  error: string;
};

export const userStore = create((set) => ({
  user: {
    name: "",
    email: "",
    image: "",
    accessToken: "",
    refreshToken: "",
    accessTokenExpires: 0,
    error: "",
  },
  setUser: (user: User) => set({ user }),
}));
