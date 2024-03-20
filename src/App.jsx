import './App.css';
import { useState } from 'react';

function App () {
  const [nombre, setNombre] = useState('');
  const [abilities, setAbilities] = useState('');



    
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`nombre:${nombre}`);
  };
  

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
