import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import { RUTAS } from '../helpers/constants';
import ErrorPage from './ErrorPage';
import Header from './Header';
import Inicio from './Inicio';
import Instrucciones from './Instrucciones';
import Resultados from './Resultados';

const App = () => {

  const [state, setState] = React.useState({
      escuela: '',
      salon: '',
      nombre: ''
    });

  const validaEscuela = (event) => {
      setState({
          ...state,
          escuela: event.target.value
      })
      if(event.target.value.length > 0) document.getElementById("inputSalon").disabled = false
      else document.getElementById("inputSalon").disabled = true
  }

  const validaSalon = (event) => {
      setState({
          ...state,
          salon: event.target.value
      })
      if(event.target.value.length > 0) document.getElementById("inputNombre").disabled = false
      else document.getElementById("inputNombre").disabled = true
  }

  const validaNombre = (event) => {
      setState({
          ...state,
          nombre: event.target.value
      })
  }

  const buscarClick = (event) =>{
      document.getElementById("lnkResultados").click()
  }

  const ruta3Param = <Route exact path={`${RUTAS.resultados}/:escuela/:salon/:nombre`} element={<Resultados/>}></Route>
  const ruta2Param = <Route exact path={`${RUTAS.resultados}/:escuela/:salon`} element={<Resultados/>}></Route>
  const ruta1Param = <Route exact path={`${RUTAS.resultados}/:escuela`} element={<Resultados/>}></Route>

  return (
    <div className="margen">
        <Router>
          <h2>Reto 2 - Buscando a Memo</h2>
          <br/>
          <Header/>
          <br/>
          Escuela: <input id="inputEscuela" value={state.escuela} onChange={validaEscuela}></input>
          <br/>
          Salón: <input id="inputSalon" value={state.salon} disabled={true} onChange={validaSalon}></input>
          <br/>
          Nombre: <input id="inputNombre" value={state.nombre} disabled={true} onChange={validaNombre}></input>
          <br/><br/>
          <button onClick={buscarClick}>Buscar</button>
          <Link id="lnkResultados" to={ (state.escuela.length && state.salon.length && state.nombre.length) ? `${RUTAS.resultados}/${state.escuela}/${state.salon}/${state.nombre}` : ( state.escuela && state.salon ? `${RUTAS.resultados}/${state.escuela}/${state.salon}` : `${RUTAS.resultados}/${state.escuela}`)} ></Link>
          <br/><br/>
          <Routes>
            <Route exact path={RUTAS.inicio} element={<Inicio/>}>Inicio</Route>
            <Route exact path={RUTAS.instrucciones} element={<Instrucciones/>}>Instrucciones</Route>
            { state.escuela.length && state.salon.length && state.nombre.length ? ruta3Param : ( state.escuela.length && state.salon ? ruta2Param : ruta1Param) }
            <Route exact path="*" element={<ErrorPage/>}>Error</Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
