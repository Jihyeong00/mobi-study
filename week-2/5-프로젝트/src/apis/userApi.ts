import { IUserType } from '@type/user.type.ts';

export const loginFetcher = async (): Promise<IUserType> => {
  const res = await fetch('/login');
  return await res.json();
};

export const logOutFetcher = async (): Promise<IUserType> => {
  const res = await fetch('/logout');
  return await res.json();
};
