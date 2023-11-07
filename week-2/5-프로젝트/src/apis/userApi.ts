import {IUserType} from '@type/user.type.ts';
import useSWR from "swr";

const fetcher = (url: string) => {
    return fetch(url).then(r => r.json())
}

export const useLogin = () => {
    const {data, error} = useSWR<IUserType>('/login', fetcher);
    return {data, error}
};

export const useLogOut = () => {
    const {data, error} = useSWR<IUserType>('/logout', fetcher);
    return {data, error}
};
