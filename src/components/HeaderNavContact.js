import HeaderNavLinks from './HeaderNavLinks';

const HeaderNavContact = () => {
  return (
    <nav>
      <ul className='header__menu'>
        <HeaderNavLinks title='Contact' href='Contact' liClass='contact' />
        <HeaderNavLinks title='Facebook' href='Facebook' liClass='Facebook' />
        <HeaderNavLinks
          title='Instagram'
          href='Instagram'
          liClass='Instagram'
        />
      </ul>
    </nav>
  );
};

export default HeaderNavContact;
