import React from "react";
import DrumPad from "./DrumPad";
import PropTypes from "prop-types";

const DrumBoard = props => {
	return (
		<div>
			{props.soundFX.map(sound => (
				<DrumPad
					key={sound.id}
					updateDisplay={props.updateDisplay}
					sound={sound}
				/>
			))}
		</div>
	);
};

DrumBoard.propTypes = {
	soundFX: PropTypes.array.isRequired,
	updateDisplay: PropTypes.func.isRequired
};

export default DrumBoard;
