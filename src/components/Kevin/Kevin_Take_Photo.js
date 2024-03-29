import React, { Component}  from "react";
import { Link } from "react-router-dom";
import WebcamCapture from "./Camera_Kevin.js";

import "../App/App.css";
import Header from "../Header/Header";

class Kevin extends Component {
	render() {
		return (
			<div className="Kevin">
				<Header />
				<h1>Skin Scan</h1>
				<div className="App-body">
                    <div className="image_page">
                        <h2> Image Submission</h2>
                        {/* <h3> Take Photo of Skin Lesion</h3> */}
                                <WebcamCapture context="kevin" />
                    </div>
					
				</div>
			</div>
		);
	}
}
export default Kevin;
