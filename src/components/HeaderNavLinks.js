import '../styles/components/headerNavLinks.scss';

const HeaderNavLinks = (props) => {
  return (
    <li className='liStyle'>
      <a href={props.href} title={props.title} />
      <span> {props.title}</span>
    </li>
  );
};

export default HeaderNavLinks;
