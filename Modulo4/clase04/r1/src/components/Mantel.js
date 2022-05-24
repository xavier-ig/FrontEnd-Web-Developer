import React from 'react';
import Plato from './Plato';
import Cubierto from './Cubierto';

const Mantel = (props) => {
	const [height, ] = React.useState(props.height || 120)
	const [backgroundColor, ] = React.useState(props.backgroundColor || 'darksalmon')
	const [colorCubierto, ] = React.useState(props.colorCubierto || 'grey')

	return (
		<div
			className="mantel spaceAround"
			style={{ height, backgroundColor }}
			>
				<Cubierto colorCubierto={colorCubierto} />
				<Plato />
				<Cubierto colorCubierto={colorCubierto} />
			</div>
		);
};

export default Mantel;