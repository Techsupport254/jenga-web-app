import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Pages/Home/Home";
import Cards from "./Components/Services/Services";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import Contacts from "./Components/Contacts/Contacts";
import About from "./Components/About/About";

const App = () => {
	return (
		<React.Fragment>
			<Router>
				<div className="App">
					<div className="AppGlass">
						<Navbar />
						<Home />
						<About />
						<Cards />
						<Projects />
						<Contacts />
						<Footer />
					</div>
				</div>
			</Router>
		</React.Fragment>
	);
};

export default App;
