
import React from 'react';

 const Luz = () => {
    const [color, setColor] = React.useState('pink')

    return (
        <div style={{ backgroundColor: color }} className="luz">
        </div>
    );
   
};

export default Luz;