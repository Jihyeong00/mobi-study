import LogoSrc from '@assets/png/logo.png';

const Logo = () => {
  return (
    <img
      className={'cursor-pointer'}
      src={LogoSrc}
      alt={'logo'}
      width={100}
      height={60}
    />
  );
};

export default Logo;
