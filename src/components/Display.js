import React from "react";
import PropTypes from "prop-types";

const Display = props => {
	return (
		<div id="display">
			<h3>{props.displayText}</h3>
		</div>
	);
};

Display.propTypes = {
	displayText: PropTypes.string
};

Display.defaultProps = {
	displayText: ""
};

export default Display;
