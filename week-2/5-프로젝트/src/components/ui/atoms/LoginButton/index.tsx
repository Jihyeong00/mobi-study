import {useLogin} from "@apis/userApi.ts";
import {useUserStore} from "@store/user.ts";

const LoginButton = () => {
    const setUserStatus = useUserStore(state => state.setUserStatus)
    const {data, mutate, error} = useLogin()

    const onClick = async () => {
            await mutate()
            if(error) throw new Error("로그인에 실패하였습니다.")
            setUserStatus(data!)
    }

    return <button onClick={onClick}>Login</button>;
};
export default LoginButton;
