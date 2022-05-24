import React from "react";
import PropTypes from 'prop-types'

const Orden = (props) => {

    const [state, ] = React.useState({
        nombre: props.orderName,
        lechuga: 0,
        queso: 0,
        carne: 0,
        totalOrden: 0
    });

    const didMount = () => {
        try{
            console.log("Order name: " , props.orderName)
        }catch(e){
            console.log("Error al montar Orden")
        }
    };
    React.useEffect(didMount, [props]);

    return(
        <div>
            Pedido para <b>{ state.nombre } </b>:
            <br/>
            &nbsp;&nbsp;&nbsp;Lechuga: { state.lechuga } <button onClick={ props.actualizaOrden }> + </button> <button> - </button>
            <br/>
            &nbsp;&nbsp;&nbsp;Queso: { state.queso } <button> + </button> <button> - </button>
            <br/>
            &nbsp;&nbsp;&nbsp;Carne: { state.carne } <button> + </button> <button> - </button>
            <br/>
            <b>Total: $ { state.totalOrden }</b>
        </div>
    )
}

Orden.propTypes = {
    orderName: PropTypes.string.isRequired,
    //key: PropTypes.string.isRequired,
    //handleClick: PropTypes.func.isRequired
}

export default Orden;