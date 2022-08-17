import '../styles/components/infoList.scss';

function Info(props) {
  return (
    <li className='article'>
      <img src={props.image} alt={props.infoimage} />
      <h2>{props.title}</h2>
      <p className='infoList__content'>{props.content}</p>
    </li>
  );
}

export default Info;
