import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { RUTAS } from '../helpers/constants';
import Cotizador from './Cotizador';
import Header from './Header';
import Instrucciones from './Instrucciones';
import Precios from './Precios';

const App = () => {

  // <input id="inputEscuela" value={state.escuela} onChange={validaEscuela}></input>
  

  /*
  const burgerLifecycle = () => {
		const totalBurger = calcularBurger(props.burger, props.precios)
		setTotal(totalBurger);
	};
	React.useEffect(burgerLifecycle, [props.burger]);
  */

  return (
    <div className="margen">
        <Router>
          <h2>Dr. Kukas Magical Burger pricer</h2>
          <br/>
          <Header/>
          <br/>
          <br/>
          <Routes>
            <Route exact path={RUTAS.inicio} element={<Precios/>}>Inicio</Route>
            <Route exact path={RUTAS.cotizador} element={<Cotizador/>}>Cotizador</Route>
            <Route exact path={RUTAS.instrucciones} element={<Instrucciones/>}>Instrucciones</Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
