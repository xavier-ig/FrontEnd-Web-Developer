import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { imgAd, RUTAS, siteURL } from '../helpers/constants';
import About from './About';
import ErrorPage from './ErrorPage';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';

const App = () => {

  const [localizeInfo, setLocalize] = React.useState({
    data: {},
  })

  const getLocalize = async() => {
      let requestOptions = {
        method: 'GET',
        headers: {
          "Accept": "*/*",
          "User-Agent": "Thunder Client (https://www.thunderclient.com)"
        }
      }
      let strURL = 'https://www.gran-turismo.com/us/gtsport/module/community/localize/'
    
      const response = await fetch(strURL, requestOptions);
      const data = await response.json(); // Extracting data as a JSON Object from the response

      setLocalize({
          ...localizeInfo,
          data: data
      })
  }

  const didMount = () => {
      try{
          getLocalize();
      }catch(e){
          //console.log("Error: Home.js - didMount - getLocalize()")
      }
  };
  React.useEffect(didMount, []);

  return (
    <div>
        <Router>
            <Header/>
            <br/>
            <Routes>
                <Route exact path={RUTAS.inicio} element={<Home localizeInfo={localizeInfo}/>}>Inicio</Route>
                <Route exact path={RUTAS.about} element={<About/>}>About</Route>
                <Route exact path="*" element={<ErrorPage/>}>Error</Route>
            </Routes>
            <br/>
            <Footer siteURL={siteURL}/>
            <br/>
            <div align="center"><a href="https://store.playstation.com/en-us/product/UP9000-PPSA01317_00-GT7STD0000000PS5/" target="_blank" rel="noreferrer"><img width="50%" align="center" src={imgAd} /></a></div>
            <br/>
        </Router>    
    </div>
  );
}

export default App;
