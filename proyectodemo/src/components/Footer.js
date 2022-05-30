import React from "react";
import PropTypes from 'prop-types';

const Footer = (props) => {
    const [state, ] = React.useState({
        siteURL: props.siteURL
    })
    return(
        <div className="footer">
            <p>Copyright 2022 {state.siteURL} - "Gran Turismo" is a trademark of Sony Computer Entertainment Inc.</p>
        </div>
    )
}

Footer.propTypes = {
    siteURL: PropTypes.string.isRequired,
}

export default Footer;
