import React from 'react';

const App = () => {

  const [state, setState] = React.useState({
    nombre: '',
    apellidos: [
       '',   // Materno
       ''    // Paterno
    ]
  });

  const editarNombre = (event) => setState({
    ...state,
    nombre: event.target.value
  })

  const editarApellidoPaterno = (event) => setState({
     ...state,
     apellidos: [state.apellidos[0], event.target.value]
  })

  const editarApellidoMaterno = (event) => setState({
    ...state,
    apellidos: [event.target.value, state.apellidos[1]] 
  })
  
  return (
      <div className='margen'>
        <input onChange={editarNombre}/>
        <input onChange={editarApellidoPaterno}/>
        <input onChange={editarApellidoMaterno}/>
        <br/>
        Mi nombre es:
        <br/>
        <b>{state.nombre + ' ' + state.apellidos[1] + ' ' + state.apellidos[0]}</b>
      </div>
   );
};

export default App;
