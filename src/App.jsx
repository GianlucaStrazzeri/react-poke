import './App.css';
import { useState } from 'react';

function App () {
  const [nombre, setNombre] = useState('');
  const [abilities, setAbilities] = useState('');



    
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let search=[]
    search.push(nombre)
    console.log("El pokemon seleccionado es: ",search)

  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${search}/`
  fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data.name);
    console.log( data.sprites.front_default);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}


  
  

  return (
<>

<nav><img src="pokeapi_256.3fa72200.png" alt="PokéAPI"/></nav>
  <h1>Poke form</h1>
  <form onSubmit={handleSubmit} >
        <label htmlFor="Nombre">PokeNombre </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
      
  </>
  )
  
};

export default App;
