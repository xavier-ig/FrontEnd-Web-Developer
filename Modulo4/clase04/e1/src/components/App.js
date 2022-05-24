import React from "react";
import Boton from "./Boton";

const App = () => {
  const [contador, setContador] = React.useState(0)
  const [contLetra, setContLetra] = React.useState('cero')

  const convertir = (num, letra) => {
    setContador(num)
    setContLetra(letra)
  }

  return (
    <div className="margen">
      
      {contador} - {contLetra}
      
      <br></br>
      <Boton
        texto="1"
        handleClick={() => convertir(1,'uno')}
      />
      <Boton
        texto="2"
        handleClick={() => convertir(2,'uno')}
      />
      <Boton
        texto="3"
        handleClick={() => convertir(3,'uno')}
      />      
    </div>
  )
}

export default App;