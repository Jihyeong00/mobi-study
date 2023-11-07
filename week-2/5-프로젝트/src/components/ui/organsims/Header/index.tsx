import ButtonGroup from '@components/ui/moleculres/ButtonGroup';
import { ButtonProps } from '@components/ui/atoms/Button';
import UserCard from '@components/ui/organsims/UserCard';
import Image from "components/ui/atoms/Image";
import logoSrc from '@assets/png/logo.png';

export type HeaderProps = {
  buttonInfo: ButtonProps[];
};
const Header = (props: HeaderProps) => {
  return (
    <header className={'flex justify-center border-b-[1px] px-4 py-8'}>
      <div className={'w-layout relative  flex justify-between'}>
        <Image src={logoSrc} alt={"로고"} width={100} height={60}/>
        <ButtonGroup buttons={props.buttonInfo} />
        <UserCard />
      </div>
    </header>
  );
};

export default Header;
