interface IUserInfo {
  profile: string;
  userName: string;
}

interface IUserType {
  isLogin: false;
  userInfo: IUserInfo
}


export type {IUserType, IUserInfo}