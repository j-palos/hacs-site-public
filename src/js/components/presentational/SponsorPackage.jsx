import React from "react";
import PropTypes from "prop-types";

const SponsorPackage = (props) => (
    <div>
        <img src={`${props.src}`} style={{maxWidth:'100%'}} />
    </div>
);

SponsorPackage.propTypes = {
    src: PropTypes.string.isRequired
};

export default SponsorPackage;
