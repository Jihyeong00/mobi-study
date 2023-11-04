export type LogOutButtonProps = {
  userInfo?: {
    userName: string;
    profile: string;
  };
  logout: () => void;
};
const LogOutButton = (props: LogOutButtonProps) => {
  const { logout, userInfo } = props;
  console.log(userInfo?.profile);
  return (
    <button
      className={'flex justify-center h-7 items-center gap-1'}
      onClick={logout}
    >
      <div className={'h-full aspect-square rounded-3xl overflow-hidden'}>
        <img src={userInfo?.profile} alt={userInfo?.userName} />
      </div>
      {userInfo?.userName}님 로그아웃
    </button>
  );
};

export default LogOutButton;
