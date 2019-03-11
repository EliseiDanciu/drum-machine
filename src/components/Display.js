import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Display extends Component {
	render() {
		const { displayText } = this.props;
		return (
			<div id="display">
				<h3>{displayText}</h3>
			</div>
		);
	}
}

Display.propTypes = {
	displayText: PropTypes.string
};

Display.defaultProps = {
	displayText: ""
};
