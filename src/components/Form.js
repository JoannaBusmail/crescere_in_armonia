function Form() {
  return (
    <fieldset>
      <legend>Rellena tus datos</legend>
      <form action='' method='POST'>
        <div>
          <label for='name'>Nombre y Apellidos</label>
          <input
            id='name'
            type='text'
            name='name'
            placeholder='Ej. Mari Carmen del Amor Hermoso'
            required='required'
          ></input>
        </div>
        <div>
          <label for='email'>E-Mail</label>
          <input
            id='email'
            type='email'
            name='email'
            placeholder='Ej. maricarmen@gmail.com'
            required='required'
          ></input>
        </div>
        <div>
          <label for='phone'>Teléfono</label>
          <input
            id='phone'
            type='phone'
            name='phone'
            placeholder='+34 666 666 666'
            required='required'
          ></input>
        </div>
        <div>
          <label for='age'>Edad del hij@</label>
          <input id='age' type='number' name='age' placeholder='Ej.2'></input>
        </div>
        <legend>Cuéntame tu historia</legend>
        <div>
          <textarea id='story' name='story'></textarea>
        </div>

        <div>
          <input type='submit' value='Enviar'></input>
        </div>
      </form>
    </fieldset>
  );
}

export default Form;
