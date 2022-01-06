//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import SecondsCounter from "./component/SecondsCounter.jsx";
// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let seconds = 0;
setInterval(() => {
	let stringSeconds = seconds.toString();
	let numberOfLetters = stringSeconds.length;
	let expectedNumerOfLetter = 5;
	let difference = expectedNumerOfLetter - numberOfLetters;
	stringSeconds = new Array(difference).fill(0).join("") + stringSeconds;
	ReactDOM.render(
		<>
			<SecondsCounter seconds={stringSeconds} background="bg-primary" />
		</>,
		document.querySelector("#app")
	);
	seconds++;
}, 1000);
