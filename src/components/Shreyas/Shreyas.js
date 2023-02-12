import React, { Component } from "react";
import { Link } from "react-router-dom";
import WebcamCapture from "../camera/camera";

import Header from "../Header/Header";

import "../App/App.css";

class Shreyas extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<h1>Shreyas&apos; app</h1>
				<body>
					<div className="webcam-capture-holder">
						<p>Webcam capture below (to use flash please brighten your screen)</p>
						<WebcamCapture />
					</div>
					<Link to="/home">
						<button> Back </button>
					</Link>
				</body>
			</div>
		);
	}
}

export default Shreyas;
