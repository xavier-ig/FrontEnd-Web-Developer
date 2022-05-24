import React from "react";
import Nombre from "./Nombre";

const App = (props) => {

  const [state, setState] = React.useState({
    nombre: '',
    mensaje: '',
    listaNombres: []
  });

  const didUpdate = () => {
    setState({
      ...state,
      mensaje: `Por hacer: ${state.listaNombres.length}`
    })
  };
  React.useEffect(didUpdate, [state.listaNombres]);

  const didMount = () => {
    console.log('Te damos la bienvenida ' + props.nombre);
  };
  React.useEffect(didMount, []);

  const willUnmount = () => {
    return () => {
       console.log('Adiós');
    }
  };
  React.useEffect(willUnmount, []);

  const handleClick = () =>{
    const nombreEnEstado = state.nombre

    if(!nombreEnEstado) return

    if(state.listaNombres.indexOf(nombreEnEstado) >= 0) {
      alert('Actividad ' + nombreEnEstado + ' Ya existe')
      return
    }

    const listaActualizada = [
      ...state.listaNombres, 
      nombreEnEstado
    ]

    setState({
      ...state,
      nombre: '',
      listaNombres: listaActualizada
    })
  }

  const handleInputChange = (event) => {
    setState({
      ...state,
      nombre: event.target.value
    })
  }

  const borrarNombreDeLista = (key) => {
    const copiaDeLista = [...state.listaNombres]
    copiaDeLista.splice(key,1)
    setState({
      listaNombres: copiaDeLista
    })
  }

  //render() {
    return (
      <div className="margen">

      {state.mensaje}
      <br/>

        <input 
          value={state.nombre} 
          onChange={handleInputChange}
        />
        
        <button onClick={handleClick}>Agregar</button>

        <ul>
          {
            state.listaNombres.map((item, key) => (
              <li key={key}>
                <Nombre 
                  nombre={item}
                  borrarNombreDeLista={() => borrarNombreDeLista(key)} />
              </li>
            ))
          }
        </ul>
      </div>
    );
  //}
}

export default App;