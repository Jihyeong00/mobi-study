export type LoginButtonProps = {
  login: () => void;
};

const LoginButton = (props: LoginButtonProps) => {
  return <button onClick={props.login}>Login</button>;
};
export default LoginButton;
