import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home/Home";

import Lanre from "./components/Lanre/Lanre";
import Alex from "./components/Alex/Alex";
import Alex2 from "./components/Alex/Alex2";
import Ramat from "./components/Ramat/Ramat";
import Kevin from "./components/Kevin/Kevin";
import Kevin_TakePhoto from "./components/Kevin/Kevin_TakePhoto";
import Kevin_OutcomePositive from "./components/Kevin/Kevin_OutcomePositive";
import Kevin_OutcomeNegative from "./components/Kevin/Kevin_OutcomeNegative";

import Shreyas from "./components/Shreyas/Shreyas";
import TonsPhotoInstructions from "./components/Shreyas/TonsPhotoInstructions";
import TonsillitisOutcome1 from "./components/Shreyas/TonsillitsOutcome1";
import TonsillitisOutcome2 from "./components/Shreyas/TonsillitisOutcome2";
import Error400 from "./Pages/Error400";
import Error404 from "./Pages/Error404";

const Main = () => {
	// const [loggedIn, setLoggedIn] = React.useState(null);
	// const loggedIn = sessionStorage.getItem("token");
	// console.log("This is the token");
	// console.log(loggedIn);

	return (
		<Routes>
			<Route path="/" element={<Home />}></Route>
			<Route exact path="/signup" element={<SignUp />}></Route>
			<Route exact path="/login" element={<Login />}></Route>
			<Route exact path="/home" element={<Home />}></Route>
			<Route exact path="/error400" element={<Error400 />}></Route>
			<Route exact path="/lanre" element={<Lanre />}></Route>
			<Route exact path="/alex" element={<Alex />}></Route>
			<Route exact path="/alex/alex2" element={<Alex2 />}></Route>
			<Route exact path="/ramat" element={<Ramat />}></Route>
			<Route exact path="/kevin" element={<Kevin />}></Route>
			<Route exact path="/kevin/take_photo" element={<Kevin_TakePhoto />}></Route>
			<Route exact path="/kevin/outcome_positive" element={<Kevin_OutcomePositive />}></Route>
			<Route exact path="/kevin/outcome_negative" element={<Kevin_OutcomeNegative />}></Route>
			<Route exact path="/shreyas/shreyas" element={<Shreyas />}></Route>
			<Route exact path="/shreyas/tonsillitis_instructions" element={<TonsPhotoInstructions />}></Route>
			<Route exact path="/shreyas/tonsillitis_outcome_1" element={<TonsillitisOutcome1 />}></Route>
			<Route exact path="/shreyas/tonsillitis_outcome_2" element={<TonsillitisOutcome2 />}></Route>
			<Route path="*" element={<Error404 />}></Route>
		</Routes>
	);
};

export default Main;

// import { Route, Redirect } from 'react-router'

// <Route exact path="/" render={() => (
//   loggedIn ? (
//     <Redirect to="/dashboard"/>
//   ) : (
//     <PublicHomePage/>
//   )
// )}/>
