import React from 'react';

class Cubierto extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			colorCubierto: 'grey'
		};
	}

	render(){
		return (
			<div className="cubierto" 
				style={{
					backgroundColor: this.props.colorCubierto || this.state.colorCubierto
				}}
			/>
		);
	}
};

export default Cubierto;