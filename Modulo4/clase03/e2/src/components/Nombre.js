import PropTypes from 'prop-types'
import React from 'react'

class Nombre extends React.Component {

    componentDidMount(){
        //alert('Bienvenido ' + this.props.nombre)
    }

    componentWillUnmount(){

    }

  render() {
    return (
      <div>
        { this.props.nombre }
        <button onClick={ this.props.borrarNombreDeLista }>X</button>
      </div>
    )
  }
}

Nombre.propTypes = {
  nombre: PropTypes.string.isRequired
}

export default Nombre