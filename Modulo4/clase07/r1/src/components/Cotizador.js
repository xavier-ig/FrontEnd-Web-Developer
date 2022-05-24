import React from "react";
import Orden from "./Orden";

const Cotizador = () => {

    const [state, setState] = React.useState({
        precioTotal: 0,
        ordenes: []
    });

    const agregarOrden = (event) => {
        if(document.getElementById("nombreCliente").value.length > 0){
            const nombreEnOrden = document.getElementById("nombreCliente").value
            const listaOrdenes = [
                ...state.ordenes, 
                nombreEnOrden
              ]
          
            setState({
                ...state,
                ordenes: listaOrdenes
            })
        }  
    }

    const actualizaOrden = (order) => {
        console.log("Hola soy orden ", order)

    }

    const pintaOrdenes = () => {
        return state.ordenes.map((item, key) => (
            <ul key={key}>
            <Orden 
                orderName={item}
                actualizaOrden={() => actualizaOrden(key)}  />
            </ul>
        ))
    }

    return(
        <div>
            <h3>TOTAL: $ { state.precioTotal } MXN</h3>
            <br/>
            Hamburguesa para: <input id="nombreCliente"></input> <button onClick={ agregarOrden }>Agregar</button>
            <br/><br/>
            {
                pintaOrdenes()
            }
        </div>
    )
}

export default Cotizador;