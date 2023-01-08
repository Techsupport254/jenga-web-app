import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Pages/Home/Home";
import Cards from "./Components/Services/Services";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Testimonials from "./Components/Testimonials/Testimonials";

const App = () => {
	return (
		<React.Fragment>
			<Router>
				<div className="App Animated">
					<div className="AppGlass">
						<Navbar />
						<Home />
						<About />
						<Cards />
						<Projects />
						<Testimonials />
						<Footer />
					</div>
				</div>
			</Router>
		</React.Fragment>
	);
};

export default App;
