import Button, { ButtonProps } from '@components/ui/atoms/Button';

export type ButtonGroupProps = {
  buttons: ButtonProps[];
};

const ButtonGroup = (props: ButtonGroupProps) => (
  <ul
    className={`absolute top-1/2 right-1/2 translate-y-[-50%] translate-x-[50%] flex gap-2`}
  >
    {props.buttons.map((button) => (
      <li key={button.text}>
        <Button
          text={button.text}
          used={button.used}
          onClick={button.onClick}
        />
      </li>
    ))}
  </ul>
);

export default ButtonGroup;
