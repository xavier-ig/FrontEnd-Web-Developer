import React from "react";
import { useParams } from "react-router-dom";

const Resultados = () => {
    const { escuela, salon, nombre  } = useParams()

    const didMount = () => {
        try{

            if(nombre.toLowerCase() === 'memo')
                alert("¡Es Memo!")
        }catch(e){

        }
    };
    React.useEffect(didMount, [nombre]);

    const txtSalon = <span><b>Salón: </b> {salon} </span> 
    const txtNombre = <span><b>Nombre: </b> {nombre} </span>


    const despliegaResultados = () => {
        return(
            <div>
            <b>Escuela:</b> { escuela } 
            <br/>
            { 
                salon ? txtSalon  : ``
            } 
            <br/>
            { 
                nombre ? txtNombre : ``
            }
            </div>
        )
    }

    return(
        <div>
            {despliegaResultados()}
        </div>
    )
}

export default Resultados;