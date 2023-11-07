import {useLogin, useLogOut} from "@apis/userApi.ts";
import {useUserStore} from "@store/user.ts";
import Button from "@components/ui/atoms/Button";

const LogInOutButton = () => {
    const {isLogin, setUserStatus} = useUserStore(state => state)
    const {loginError, loginData, loginAction} = useLogin()
    const {logoutError, logoutData, logoutAction} = useLogOut()

    const logIn = async () => {
        await loginAction()
        if (loginError) throw new Error("로그인에 실패하였습니다.")
        setUserStatus(loginData!)
    }

    const logOut = async () => {
        await logoutAction()
        if (logoutError) throw new Error("로그아웃에 실패하였습니다.")
        setUserStatus(logoutData!)
    }

    return (
        <>
            {isLogin ?
                 <Button onClick={logOut} text={'로그아웃'} used={true}/>
                :<Button onClick={logIn} text={'로그인'} used={true}/>
            }
        </>

    );
};
export default LogInOutButton;
