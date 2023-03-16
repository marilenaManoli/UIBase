import React, { Component } from "react";
import { Link } from "react-router-dom";
import WebcamStreamCapture from "../Webcam";

import WebcamCapture from "../camera/camera";

import "../App/App.css";
import Header from "../Header/Header";

class Kevin extends Component {
	render() {
		return (
			<div className="Kevin">
				<Header />
				<h1>Kevin's app</h1>
				<div className="App-body">
					<h2> Iteration 1 - Simple Case</h2>

					<h3> Take Photo of Skin Lesion</h3>
					


				<p style={{ textAlign: "center", marginBottom: "20px" }}> Webcam Capture </p>
						<WebcamCapture context="kevin"/>
					<Link to="/home">
						<button> Back </button>
					</Link>
				</div>
			</div>
		);
	}
}

export default Kevin;
