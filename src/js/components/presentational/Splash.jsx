import React from "react";
import PropTypes from "prop-types";

const Splash = (props) => (
   
    <div>
        <img src={`${props.imagePath}`} style={{maxWidth:'100%'}} />
    </div>
);

Splash.propTypes = {
    imagePath: PropTypes.string.isRequired
};

export default Splash;
