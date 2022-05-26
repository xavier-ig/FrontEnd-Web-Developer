import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RUTAS } from '../helpers/constants';
import About from './About';
import ErrorPage from './ErrorPage';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';

const App = () => {

  return (
    <div>
        <Router>
            <Header/>
            <br/>
            <Routes>
                <Route exact path={RUTAS.inicio} element={<Home/>}>Inicio</Route>
                <Route exact path={RUTAS.about} element={<About/>}>About</Route>
                <Route exact path="*" element={<ErrorPage/>}>Error</Route>
            </Routes>
            <br/>
            <Footer/>
        </Router>    
    </div>
  );
}

export default App;
