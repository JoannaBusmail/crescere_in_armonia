import HeaderNavLinks from './HeaderNavLinks';

const HeaderNav = (props) => {
  return (
    <nav>
      <ul className='header__menu'>
        <HeaderNavLinks title='About Me' href='aboutMe' />
        <HeaderNavLinks title='Info' href='info' />
        <HeaderNavLinks title='Cursos' href='cursos' />
      </ul>
    </nav>
  );
};

export default HeaderNav;
