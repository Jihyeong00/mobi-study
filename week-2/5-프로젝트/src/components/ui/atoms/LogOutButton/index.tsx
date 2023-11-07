import {useUserStore} from "@store/user.ts";
import {useLogOut} from "@apis/userApi.ts";

const LogOutButton = () => {
  const {userInfo, setUserStatus} = useUserStore(state => state)
  const {data, mutate, error} = useLogOut()

  const onClick = async () => {
      await mutate()
      if(error) throw new Error("로그아웃에 실패하였습니다.")
      setUserStatus(data!)
  }

  return (
    <button
      className={'flex justify-center h-7 items-center gap-1'}
      onClick={onClick}
    >
      <div className={'h-full aspect-square rounded-3xl overflow-hidden'}>
        <img src={userInfo?.profile} alt={userInfo?.userName} />
      </div>
      {userInfo?.userName}님 로그아웃
    </button>
  );
};

export default LogOutButton;
