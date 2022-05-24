import { Link } from 'react-router-dom'
import { RUTAS } from '../helpers/constants';


const Precios = () => {

    const vamoACotizar = (event) =>{
        document.getElementById("lnkCotizar").click()
    }

    return(
        <div>
            Pan 1: $ <input id="pricePan1"></input> MXN
            <br/><br/>
            Lechuga: $ <input id="priceLechuga"></input> MXN
            <br/><br/>
            Queso: $ <input id="priceQueso"></input> MXN
            <br/><br/>
            Carne: $ <input id="priceCarne"></input> MXN
            <br/><br/>
            Pan 2: $ <input id="pricePan2"></input> MXN
            <br/><br/>
            <button onClick={vamoACotizar}>Cotizar</button>
            <Link id="lnkCotizar" to={`${RUTAS.cotizador}`}></Link>

        </div>
    )
}

export default Precios;