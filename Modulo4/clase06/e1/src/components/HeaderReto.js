import { Link } from 'react-router-dom'

const HeaderReto = () => {
    return(
        <div>
            <Link to="/inicio">
                Inicio
            </Link>
            { ' | ' }
            <Link to="/hojas">
                Hojas
            </Link>
            { ' | ' }
            <Link to="/cocos">
                Cocos
            </Link>
            { ' | ' }
            <Link to="/tronco">
                Tronco
            </Link>
            { ' | ' }
            <Link to="/palmera">
                Palmera
            </Link>
        </div>
    )
}

export default HeaderReto;