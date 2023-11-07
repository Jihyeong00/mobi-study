import {IUserType} from '@type/user.type.ts';
import useSWR from "swr";

const fetcher = (url: string) => {
    return fetch(url).then(r => r.json())
}

export const useLogin = () => {
    const {data: loginData, error: loginError, mutate: loginAction} = useSWR<IUserType>('/login', fetcher);
    return {loginData, loginError, loginAction}
};

export const useLogOut = () => {
    const {data: logoutData, error: logoutError, mutate: logoutAction} = useSWR<IUserType>('/logout', fetcher);
    return {logoutData, logoutError, logoutAction}
};
