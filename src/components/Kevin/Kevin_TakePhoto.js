import React, { Component, useState}  from "react";
import { Link } from "react-router-dom";
import WebcamStreamCapture from "../Webcam";

import WebcamCapture from "../camera/camera";

import "../App/App.css";
import Header from "../Header/Header";

class Kevin extends Component {

	constructor(props) {
		super(props);
		this.state = {
		  inputValues: {
			input1: '',
			input2: '',
		  },
		};
		this.handleInputChange = this.handleInputChange.bind(this);
	  }
	
	  handleInputChange(event) {
		const { name, value } = event.target;
		this.setState((prevState) => ({
		  inputValues: {
			...prevState.inputValues,
			[name]: value,
		  },
		}));
	  }

	render() {
		const { inputValues } = this.state;
		return (
			<div className="Kevin">
				<Header />
				<h1>Kevin's app</h1>
				<div className="App-body">
					<h2> Iteration 1 - Simple Case</h2>

					<h3> Take Photo of Skin Lesion</h3>


					
					


				<p style={{ textAlign: "center", marginBottom: "20px" }}> Webcam Capture </p>
						<WebcamCapture context="kevin" inputValues={inputValues}/>
				
				{/* <input>Enter Size of lesion:</input>
				<input>Enter Size of lesion:</input> */}

					<form>
					<input
          type="text"
          name="input1"
          value={inputValues.input1}
          onChange={this.handleInputChange}
        />
        <input
          type="text"
          name="input2"
          value={inputValues.input2}
          onChange={this.handleInputChange}
        />
					</form>
				
					<Link to="/home">
						<button> Back </button>
					</Link>
				</div>
			</div>
		);
	}
}

export default Kevin;
