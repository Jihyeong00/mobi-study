export type ButtonProps = {
  used: boolean;
  text: string;
  onClick?: () => void;
};
const Button = (props: ButtonProps) => (
  <button
    onClick={props.onClick}
    className={`rounded-md  flex w-[60px] p-button ${
      props.used ? `bg-primary-100 text-[#154FEF]` : `bg-white text-[#667085]`
    }`}
  >
    <div className={'text-xs font-normal'}>{props.text}</div>
  </button>
);

export default Button;
