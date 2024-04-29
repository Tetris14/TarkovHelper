import { create } from "zustand";

type UserState = {
  username: string | null;
  email: string | null;
  jwtToken: string | null;
  isLoggedIn: boolean;
  login: (username: string, email: string, jwtToken: string) => void;
  logout: () => void;
};

const useUserStore = create<UserState>((set) => ({
  username: null,
  email: null,
  jwtToken: null,
  isLoggedIn: false,
  login: (username: string, email: string, jwtToken: string) =>
    set((state) => ({
      username: username,
      email: email,
      jwtToken: jwtToken,
      isLoggedIn: true,
    })),
  logout: () =>
    set(() => ({
      username: null,
      email: null,
      jwtToken: null,
      isLoggedIn: false,
    })),
}));

export default useUserStore;
