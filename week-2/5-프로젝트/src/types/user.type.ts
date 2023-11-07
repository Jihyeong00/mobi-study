export interface IUserInfo {
  profile: string;
  userName: string;
}

export interface IUserType {
  isLogin: false;
  userInfo: IUserInfo
}
