import Logo from '@components/ui/atoms/Logo';
import ButtonGroup from '@components/ui/moleculres/ButtonGroup';
import { ButtonProps } from '@components/ui/atoms/Button';
import UserCard from '@components/ui/moleculres/UserCard';

export type HeaderProps = {
  buttonInfo: ButtonProps[];
};
const Header = (props: HeaderProps) => {
  return (
    <header className={'flex justify-center border-b-[1px] px-4 py-8'}>
      <div className={'w-layout relative  flex justify-between'}>
        <Logo />
        <ButtonGroup buttons={props.buttonInfo} />
        <UserCard />
      </div>
    </header>
  );
};

export default Header;
