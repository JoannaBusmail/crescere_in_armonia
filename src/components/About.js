import PhotoAbout from '../images/PhotoAbout.png';
import '../styles/components/aboutMe.scss';

const About = () => {
  return (
    <article className='aboutMe__article'>
      <div className='aboutMe__text'>
        <h2 className='aboutMe__text--title'>About Me</h2>
        <p className='aboutMe__text--content'>
          Lorem ipsum dolor sit amet consectetur adipiscing elit litora
          suspendisse cubilia arcu dis nec nullam ut imperdiet, aptent elementum
          pharetra volutpat faucibus platea non vestibulum feugiat nulla tempor
          curabitur potenti tortor. Pellentesque habitant nisl phasellus
          bibendum mi quam lacinia odio, vel vehicula luctus platea tempor enim
          gravida.Pellentesque habitant nisl phasellus bibendum mi quam lacinia
          odio, vel vehicula luctus platea tempor enim gravida.
        </p>
      </div>
      <div className='aboutMe__photoContainer'>
        <img
          className='aboutMe__photoContainer--photo'
          src={PhotoAbout}
          alt='photoAbout'
          title='photoAbout'
        />
      </div>
    </article>
  );
};

export default About;
