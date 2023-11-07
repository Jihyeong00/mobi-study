import LoginButton from '@components/ui/atoms/LoginButton';
import LogOutButton from '@components/ui/atoms/LogOutButton';
import { useUserStore } from '@store/user.ts';

const UserCard = () => {
  const { isLogin } = useUserStore((state) => state);
  return (
    <div className={'text-xs flex text-center'}>
      {isLogin ? (
        <LogOutButton />
      ) : (
        <LoginButton />
      )}
    </div>
  );
};

export default UserCard;
