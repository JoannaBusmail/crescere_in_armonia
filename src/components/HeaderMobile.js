import '../styles/components/headerMobile.scss';
import Logo from './Logo';

const HeaderMobile = (props) => {
  return (
    <nav className='headerMobile'>
      <div className='menuHamburguer'>
        <i class='fa-solid fa-bars'></i>
      </div>
      <Logo />
    </nav>
  );
};

export default HeaderMobile;
