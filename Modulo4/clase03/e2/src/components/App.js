import React from "react";
import Nombre from "./Nombre";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nombre: '',
      mensaje: '',
      listaNombres: []
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.listaNombres !== prevState.listaNombres){
      this.setState({
        mensaje: `La longitud de la lista es: ${this.state.listaNombres.length}`
      })
    }
  }

  handleClick = () =>{
    const nombreEnEstado = this.state.nombre

    if(!nombreEnEstado) return

    if(this.state.listaNombres.indexOf(nombreEnEstado) >= 0) {
      alert('Actividad ' + nombreEnEstado + ' Ya existe')
      return
    }

    const listaActualizada = [
      ...this.state.listaNombres, 
      nombreEnEstado
    ]

    this.setState({
      nombre: '',
      listaNombres: listaActualizada
    })
  }

  handleInputChange = (event) => {
    this.setState({
      nombre: event.target.value
    })
  }

  borrarNombreDeLista = (key) => {
    const copiaDeLista = [...this.state.listaNombres]
    copiaDeLista.splice(key,1)

    this.setState({
      listaNombres: copiaDeLista
    })
  }

  render() {
    return (
      <div className="margen">

      {this.state.mensaje}
      <br/>

        <input 
          value={this.state.nombre} 
          onChange={this.handleInputChange}
        />
        
        <button onClick={this.handleClick}>Agregar</button>

        <ul>
          {
            this.state.listaNombres.map((item, key) => (
              <li key={key}>
                <Nombre 
                  nombre={item}
                  borrarNombreDeLista={() => this.borrarNombreDeLista(key)} />
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default App;