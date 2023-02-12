import React, { Component } from "react";
import { Link } from "react-router-dom";
import WebcamStreamCapture from "../Webcam";
import "../App/App.css";

import Header from "../Header/Header";

class Lanre extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<h1>Lanre&apos;s app</h1>
				<div className="App-body">
					<WebcamStreamCapture />
					<Link to="/home">
						<button> Back </button>
					</Link>
				</div>
			</div>
		);
	}
}

export default Lanre;
