import { Link } from 'react-router-dom'
import { RUTAS } from '../helpers/constants';

const Header = () => {
    return(
        <div className='navbar'>
            <div>
                <h3>My Gran Turismo Sport Stats</h3>
            </div>
            <Link to={RUTAS.inicio}>Home</Link>
            <Link to={RUTAS.about}>About</Link>          
        </div>
    )
}

export default Header;