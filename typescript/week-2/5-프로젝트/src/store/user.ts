import {create} from 'zustand';
import {IUserInfo} from "@type/user.type.ts";

interface IUserStore {
    isLogin: boolean;
    userInfo?: IUserInfo
    setUserStatus: (userInfo: { isLogin: boolean, userInfo: IUserInfo }) => void
}

export const useUserStore = create<IUserStore>((set) => ({
    isLogin: false,
    userInfo: undefined,
    setUserStatus: ({isLogin, userInfo}) => {
        set({isLogin, userInfo});
    }
}));
