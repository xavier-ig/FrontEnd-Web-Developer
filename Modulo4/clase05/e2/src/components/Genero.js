import PropTypes from 'prop-types'

const Genero = (props) => {

    return(
        <div>
            <div className={props.class}></div>
            <br/>
            { props.texto }
        </div>
    )
};

Genero.propTypes = {
    class: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired
}

export default Genero
