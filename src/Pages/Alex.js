import React, { Component } from "react";
import { Link } from "react-router-dom";
import WebcamStreamCapture from "../Component/Webcam";

import "../App.css";

class Alex extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1>Alex's app</h1>
				</header>
				<body>
				<div className="login-form__content">
					<div id = "VidCapture">
						{/* TODO: Camera needs to scale properly to the page - right now it is hard coding the size. */}
						<p>Webcam capture below</p>
						<WebcamStreamCapture className = "video"/>
					</div>
					
				</div>
					<Link to="/home">
						<button> Back </button>
					</Link>
				</body>
			</div>
		);
	}
}

export default Alex;


