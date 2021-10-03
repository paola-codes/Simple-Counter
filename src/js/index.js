//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

import PropTypes from "prop-types";

export const SimpleCounter = props => {
	return (
		<div className="container d-flex justify-content-center">
			<div className="bigCounter col-sm-6 col-md-7 d-flex display-6 h-100 bgMyColor text-white p-1 pb-2 justify-content-center mt-2">
				<div className="clock m-1 p-1 bgMyColor2">
					<i className="far fa-clock display-3"></i>
				</div>
				<div className="four m-1 p-1 pt-2 bgMyColor2">
					{props.digitSix}
				</div>
				<div className="four m-1 p-1 pt-2 bgMyColor2">
					{props.digitFive}
				</div>
				<div className="four m-1 p-1 pt-2 bgMyColor2">
					{props.digitFour}
				</div>
				<div className="three m-1 p-1 pt-2 bgMyColor2">
					{props.digitThree}
				</div>
				<div className="two m-1 p-1 pt-2 bgMyColor2">
					{props.digitTwo}
				</div>
				<div className="one m-1 p-1 pt-2 bgMyColor2">
					{props.digitOne}
				</div>
			</div>
		</div>
	);
};

SimpleCounter.propTypes = {
	digitOne: PropTypes.number,
	digitTwo: PropTypes.number,
	digitThree: PropTypes.number,
	digitFour: PropTypes.number,
	digitFive: PropTypes.number,
	digitSix: PropTypes.number
};

let counter = 0;

setInterval(() => {
	const six = Math.floor(counter / 100000);
	const five = Math.floor(counter / 10000);
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	counter++;
	ReactDOM.render(
		<SimpleCounter
			digitOne={one % 10}
			digitTwo={two % 10}
			digitThree={three % 10}
			digitFour={four % 10}
			digitFive={five % 10}
			digitSix={six % 10}
		/>,
		document.querySelector("#app")
	);
}, 1000);
