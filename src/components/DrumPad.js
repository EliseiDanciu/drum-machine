import React, { Component } from "react";
import PropTypes from "prop-types";

export default class DrumPad extends Component {
	componentDidMount() {
		document.addEventListener("keydown", this.handleKeyPress);
	}
	componentWillUnmount() {
		document.removeEventListener("keydown", this.handleKeyPress);
	}

	handlePlay = () => {
		const { sound, updateDisplay } = this.props;
		const audio = document.getElementById(sound.keyTrigger);
		audio.play();
		updateDisplay(sound.id);
	};

	handleKeyPress = e => {
		const { keyCode } = this.props.sound;
		if (e.keyCode === keyCode) {
			this.handlePlay();
		}
	};

	render() {
		const { url, keyTrigger, id } = this.props.sound;
		return (
			<React.Fragment>
				<button className="drum-pad" id={id} onClick={this.handlePlay}>
					<audio src={url} id={keyTrigger} className="clip" />
					{keyTrigger}
				</button>
			</React.Fragment>
		);
	}
}

DrumPad.propTypes = {
	sound: PropTypes.object.isRequired,
	updateDisplay: PropTypes.func.isRequired
};
