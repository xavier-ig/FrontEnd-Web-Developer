import PropTypes from 'prop-types'
import React from 'react'


class Nombre extends React.Component {

    componentDidMount(){
        //alert('Bienvenido ' + this.props.nombre)
    }

    componentWillUnmount(){

    }
  
    
/*
    const didMount = () => {
      console.log('Te damos la bienvenida ' + props.nombre);
    };
    React.useEffect(didMount, []);

    const willUnmount = () => {
      return () => {
         console.log('Adiós');
      }
    };
    React.useEffect(willUnmount, []);
*/
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

/*
const Nombre = (props) => {
  const didMount = () => {
     console.log('Te damos la bienvenida ' + props.nombre);
  };
  React.useEffect(didMount, []);

  const willUnmount = () => {
     return () => {
        console.log('Adiós');
     }
  };
  React.useEffect(willUnmount, []);

  return (
     <div>
        {props.nombre}
        <button onClick={props.borrarNombreDeLista}>
           X
        </button>
     </div>
  );
};

Nombre.propTypes = {
  nombre: PropTypes.string.isRequired
}

export default Nombre

*/