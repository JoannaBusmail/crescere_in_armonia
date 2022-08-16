import HeaderNav from './HeaderNav';
import HeaderNavContact from './HeaderNavContact';
import Logo from './Logo';
import HeaderMobile from './HeaderMobile';
import '../styles/components/header.scss';

const Header = () => {
  return (
    <header>
      <div className='headerMobile'>
        <HeaderMobile />
        <Logo />
      </div>
      <div className='headerDesktop'>
        <HeaderNav />
        <Logo />
        <HeaderNavContact />
      </div>
    </header>
  );
};

export default Header;
