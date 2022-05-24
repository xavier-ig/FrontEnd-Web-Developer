
//import imgCenter from '../images/home.jpeg';

const App = () => {

//Función para cargar imagen en base a una ruta
/*
const loadImage = (imagen) => {
  const img = new Image();
  img.src = imagen;
  
  return img;
};
*/
//Agrega imagen dentro del DIV imgCenter
//document.getElementById('imgCenter').appendChild(loadImage(imgCenter));



  return (
    <div>
        <nav>
            <div id="titulo">
                <h3>My Gran Turismo Statistics</h3>
            </div>
            <div id="menu">
                <ul>
                    <li>Home</li>
                    <li>My Profile</li>
                    <li>Daily Races</li>
                </ul>
            </div>
        </nav>
        <header className="header">
            <h1>Improve your gaming and #findyourline</h1>
            <p>Review your lap times live and subscribe to receive weekly updates and insight to improve your driving skills</p>
            {
              //<div id="imgCenter"></div>
            }
        </header>

        <section id="myProfile">
            <h3>Search Players of Gran Turismo Sport</h3>
            <div id="psn_user-input">
                <input type="text" placeholder="PlayStation ID" id="psnProfile"/>
                <button id="btnSearchProfile">Search</button>
            </div>

            <p id="myProfileDisclaimer">This search tool requires the exact PSN profile name.<br/>Profile name contains no "space", but can contains one or several "_" (underscore) instead.<br/>If you still can't find a profile name, it may have been renamed and still exists here as an old name version.</p>

            <div id="profileResponse"></div>
        </section>

        <footer className="footer">
            <p>Copyright 2022 nameofthesite.com - "Gran Turismo" is a trademark of Sony Computer Entertainment Inc.</p>
        </footer>

    </div>
  );
}

export default App;
