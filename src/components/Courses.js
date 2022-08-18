import '../styles/components/courses.scss';

function Courses() {
  return (
    <article className='container'>
      <div className='courses'>
        <h2 className='courses__title'>Cursos</h2>
        <p className='courses__description'>
          Descripción del curso: Lorem ipsum dolor sit amet consectetur
          adipiscing elit litora suspendisse cubilia arcu dis nec nullam ut
          imperdiet, aptent elementum pharetra volutpat faucibus platea non
          vestibulum feugiat nulla tempor curabitur potenti tortor. Pellentesque
          habitant nisl phasellus bibendum mi quam lacinia odio, vel vehicula
          luctus platea tempor enim gravida.{' '}
        </p>
        <p className='courses__duration'> Duración: xhs durante x semanas</p>
        <p className='courses__price'>Precio: x€</p>
      </div>
    </article>
  );
}

export default Courses;
