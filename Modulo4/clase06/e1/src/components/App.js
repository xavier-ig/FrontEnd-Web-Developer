import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Cabeza from './Cabeza';
import Cocos from './Cocos';
import Cuerpo from './Cuerpo';
import Header from './Header';
import HeaderReto from './HeaderReto';
import Hojas from './Hojas';
import Inicio from './Inicio';
import Tronco from './Tronco';

const App = () => {
  return (
      <div className="margen">
        <Router>
          <h1>Ejemplo 1</h1>
          <br/>
          <Header/>
          <br/>
          { 
            /* Versión 5 o previa */     
            /*
            <Route path='/' element={<Cabeza/>}></Route>
            <Route path='/cuerpo' element={<Cuerpo/>}></Route>
            */
          }
          {/* Versión 6 o superior */}
          <Routes>
            <Route exact path='/' element={<Cabeza/>}></Route>
            <Route exact path='/cuerpo' element={<Cuerpo/>}></Route>
            <Route exact path='/juntos' element={
              <React.Fragment>
                <Cabeza/>
                <Cuerpo/>
              </React.Fragment>
              }>
            </Route>
          </Routes>

          <h1>Reto 1</h1>
          <br/>
          <HeaderReto/>
          <br/>
          <Routes>
            <Route exact path='/inicio' element={<Inicio/>}></Route>
            <Route exact path='/hojas' element={<Hojas/>}></Route>
            <Route exact path='/cocos' element={<Cocos/>}></Route>
            <Route exact path='/tronco' element={<Tronco/>}></Route>
            <Route exact path='/palmera' element={
              <React.Fragment>
                <Hojas/>
                <Cocos/>
                <Tronco/>
              </React.Fragment>
              }>
            </Route>
          </Routes>
        </Router>
      </div>
  );
}

export default App;
