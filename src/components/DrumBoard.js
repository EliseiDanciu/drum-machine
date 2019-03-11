import React, { Component } from "react";
import DrumPad from "./DrumPad";
import PropTypes from "prop-types";

export default class DrumBoard extends Component {
	render() {
		const { soundFX, updateDisplay } = this.props;
		return (
			<div>
				{soundFX.map(sound => (
					<DrumPad key={sound.id} updateDisplay={updateDisplay} sound={sound} />
				))}
			</div>
		);
	}
}

DrumBoard.propTypes = {
	soundFX: PropTypes.array.isRequired,
	updateDisplay: PropTypes.func.isRequired
};
