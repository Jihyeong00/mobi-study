import {IUserType} from '@type/user.type.ts';
import useSWR from "swr";

const fetcher = (url: string) => {
    return fetch(url).then(r => r.json())
}

export const useLogin = () => {
    const {data, error, mutate} = useSWR<IUserType>('/login', fetcher);
    return {data, error, mutate}
};

export const useLogOut = () => {
    const {data, error, mutate} = useSWR<IUserType>('/logout', fetcher);
    return {data, error, mutate}
};
