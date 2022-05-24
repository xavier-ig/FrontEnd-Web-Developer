
// Renderizado condicional
// - Directo
// - Ternario
// - Por función

import React from "react";
import Tareas from "./Tareas";
import Profes from "./Profes";
import Usuarios from "./Usuarios";
import Genero from "./Genero";

const App = () => {

  const [mostrarTareas, setMostrarTareas] = React.useState(false)
  const [mostrarProfes, setMostrarProfes] = React.useState(false)
  const [mostrarUsiarios, setMostrarUsuarios] = React.useState(false)
  const [genero, setGenero] = React.useState('')


  const componente = <span>Hola Mundo!</span>
  const componenteNo = <span>Adios Mundo!</span>
  const componenteNoHay = <span>No Hay!</span>

  const renderizarUsuarios = () => {
    if(mostrarUsiarios) return componente
    return componenteNoHay
  }

  const cambiaGenero = (gen) => { 
    setGenero(gen) 
  }

  const renderizaGenero = () => {
    if(genero === 'nino') return <Genero class={genero} texto="Será un niño" />
    if(genero === 'nina') return <Genero class={genero} texto="Será una niña" />
  }

  return (
    <div className="margen">
      Directo:
      <br/>
      - { (mostrarUsiarios && componente) || componenteNo}
      <br/>
      <br/>
      Ternario
      <br/>
      - { mostrarUsiarios ? componente : componenteNoHay}
      <br/>
      <br/>
      Por Función:
      <br/>
      - { renderizarUsuarios() }
      <br/>
      <br/>
      <br/>
      <br/>
      <button onClick={() => setMostrarTareas(!mostrarTareas)}>Tareas</button>
      <br/>
      { mostrarTareas && <Tareas/> }
      <br/>
      <button onClick={() => setMostrarProfes(!mostrarProfes)}>Profes</button>
      <br/>
      { mostrarProfes && <Profes/> }
      <br/>
      <button onClick={() => setMostrarUsuarios(!mostrarUsiarios)}>Usuarios</button>
      <br/>
      { mostrarUsiarios && <Usuarios/> }
      <br/>
      <br/>
      <br/>
      <br/>
      RETO 02
      <br/><br/>
      <input id="nina" value="nina" name="genero" type='radio'
        onClick={() => cambiaGenero('nina')} /><label htmlFor="nina">Niña</label>
      <br/>
      <input id="nino" value="nino" name="genero" type='radio' 
        onClick={() => cambiaGenero('nino')} /><label htmlFor="nino">Niño</label>
      <br/>
      <br/>
      {renderizaGenero()}
    </div>
  );
}

export default App;
