import LoginButton from '@components/ui/atoms/LoginButton';
import LogOutButton from '@components/ui/atoms/LogOutButton';
import { useUserStore } from '@store/user.ts';

const UserCard = () => {
  const { isLogin, login, userInfo, logout } = useUserStore((state) => state);
  return (
    <div className={'text-xs flex text-center'}>
      {isLogin ? (
        <LogOutButton userInfo={userInfo} logout={logout} />
      ) : (
        <LoginButton login={login} />
      )}
    </div>
  );
};

export default UserCard;
