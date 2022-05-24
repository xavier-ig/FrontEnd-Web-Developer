import React from 'react';
import Mantel from './Mantel';

const TresManteles = () => {
	return (
		<div className="width100 spaceAround">
			<Mantel 
                height={100}
                colorCubierto="coral"
                backgroundColor="green" />
			<Mantel />
			<Mantel
                height={80}
                colorCubierto="black"
                backgroundColor="purple" />
		</div>
	);
};

export default TresManteles;