import "../App.css";
import { Link } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<header className="App-header">
			<nav class="navbar navbar-dark bg-dark" id = 'navbar'>
				{/* <a class="navbar-brand" href="#"></a> */}
				<h1> LARKS APP</h1>
				</nav>
			</header>
			<body>
				<form class="login-form" action="./" method="POST">
					<div class="login-form__title-box">
						<h2>Larks login header</h2> 
					</div>
					<div class="login-form__content">
						<div class="login-form__header">Login to your account</div>
						<input class="login-form__input" type="text" name="dc_username" placeholder="Username"></input>
                		<input class="login-form__input" type="password" name="dc_username" placeholder="Password"></input>
						<Link to="/home">
							<button class="login-form__button" type="submit">Login</button>
						</Link>
						
						<div class="login-form__links">
							<a class="login-form__link" href="/register">Don't have an account? Register Here!</a>
						</div>
					</div>
				</form>
        	</body>
		</div>
	);
}

export default App;
