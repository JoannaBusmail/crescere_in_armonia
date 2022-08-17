import '../styles/App.scss';
import '../styles/components/infoList.scss';
import Azul from '../images/azul.png';
import Rosa from '../images/rosa.png';
import Verde from '../images/verde.png';
import Header from './Header';
import About from './About';
import Info from './Info';

function App() {
  //renders
  const renderArticle = () => {
    return (
      <>
        <Info
          image={Azul}
          infoimage='imagen azul'
          title='Amor'
          content='lLorem ipsum dolor sit amet consectetur adipiscing elit litora
          suspendisse cubilia arcu dis nec nullam ut imperdiet, aptent elementum
          pharetra volutpat faucibus platea non vestibulum feugiat nulla tempor
          curabitur potenti tortor.'
        />
        <Info
          image={Rosa}
          infoimage='imagen rosa'
          title='Crianza'
          content='lLorem ipsum dolor sit amet consectetur adipiscing elit litora
          suspendisse cubilia arcu dis nec nullam ut imperdiet, aptent elementum
          pharetra volutpat faucibus platea non vestibulum feugiat nulla tempor
          curabitur potenti tortor.'
        />
        <Info
          image={Verde}
          infoimage='imagen verde'
          title='Etapas'
          content='lLorem ipsum dolor sit amet consectetur adipiscing elit litora
          suspendisse cubilia arcu dis nec nullam ut imperdiet, aptent elementum
          pharetra volutpat faucibus platea non vestibulum feugiat nulla tempor
          curabitur potenti tortor.'
        />
      </>
    );
  };

  return (
    <>
      <Header />
      <About />
      <ul className='infoList'>{renderArticle()} </ul>
    </>
  );
}

export default App;
