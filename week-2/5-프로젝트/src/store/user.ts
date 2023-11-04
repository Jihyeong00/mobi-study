import { create } from 'zustand';
import { loginFetcher, logOutFetcher } from '@apis/userApi.ts';

interface IUserStore {
  isLogin: boolean;
  userInfo?: {
    profile: string;
    userName: string;
  };
  login: () => void;
  logout: () => void;
}

export const useUserStore = create<IUserStore>((set) => ({
  isLogin: false,
  userInfo: undefined,
  login: async () => {
    const response = await loginFetcher();
    const { isLogin, userInfo } = response;
    set({ isLogin: isLogin, userInfo });
  },
  logout: async () => {
    const response = await logOutFetcher();
    const { isLogin, userInfo } = response;
    set({ isLogin: isLogin, userInfo });
  },
}));
