import React from "react";
import PropTypes from "prop-types";
const SecondsCounter = (props) => {
	const singleDigits = props.seconds.split("");
	return (
		<div className="bigCounter">
			<div className="clockIcon">
				<i className="far fa-clock"></i>
			</div>
			<div className="six">{singleDigits[0]}</div>
			<div className="six">{singleDigits[1]}</div>
			<div className="six">{singleDigits[2]}</div>
			<div className="six">{singleDigits[3]}</div>
			<div className="six">{singleDigits[4]}</div>
		</div>
	);
};
SecondsCounter.propTypes = {
	seconds: PropTypes.number,
};
export default SecondsCounter;
