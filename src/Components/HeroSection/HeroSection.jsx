import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
	const scrollToContacts = () => {
		const contacts = document.querySelector(".Contacts");
		contacts.scrollIntoView({ behavior: "smooth" });
	};

	const scrollToAbout = () => {
		const about = document.querySelector(".About");
		about.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className="HeroSection animate__zoomIn">
			<div className="HeroContainer">
				<h2>Build your home</h2>
				<p>Build your home with us</p>
				<div className="btns">
					<button className="btn-primary" onClick={scrollToContacts}>
						Contact Us
					</button>
					<button className="btn"
					onClick={scrollToAbout}
					>View More</button>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
