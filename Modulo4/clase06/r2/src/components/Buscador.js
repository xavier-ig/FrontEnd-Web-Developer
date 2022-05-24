import React from 'react';
import { Link } from 'react-router-dom'
import { RUTAS } from '../helpers/constants';

const Buscador = () => {
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
        ///${state.salon}/${state.nombre}
    }

    return(
        <div>
            Escuela: <input id="inputEscuela" value={state.escuela} onChange={validaEscuela}></input>
            <br/>
            Salón: <input id="inputSalon" value={state.salon} disabled={true} onChange={validaSalon}></input>
            <br/>
            Nombre: <input id="inputNombre" value={state.nombre} disabled={true} onChange={validaNombre}></input>
            <br/>
            <br/>
            <button onClick={buscarClick}>Buscar</button>
            <Link id="lnkResultados" to={`${RUTAS.resultados}/${state.escuela}`} ></Link>
        </div>
    )
}

export default Buscador;