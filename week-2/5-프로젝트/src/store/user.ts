import {create} from 'zustand';

interface IUserInfo {
    profile: string;
    userName: string;
}

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
