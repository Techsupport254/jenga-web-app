import React from "react";
import "./About.css";

const About = () => {
	return (
		<div className="About Animated">
			<h1 className="heading">** About Us **</h1>
			<div className="History">
				<p>
					<span>Jenga</span> Is a construction Company <br /> Dedicated to build
					your home just the way you want.
				</p>
				<p>We also do many other activities apart from construction.</p>
			</div>
			<div className="AboutContent">
				<div className="Card">
					<h5>Overview</h5>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
						facilis tenetur architecto sint ipsum sed, at cum omnis similique
						reprehenderit corporis dolore suscipit impedit est et eius
						perspiciatis officia voluptas!
					</p>
				</div>
				<div className="Card">
					<h5>Our Team</h5>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
						facilis tenetur architecto sint ipsum sed, at cum omnis similique
						reprehenderit corporis dolore suscipit impedit est et eius
						perspiciatis officia voluptas!
					</p>
				</div>
				<div className="Card">
					<h5>Values and Philosophy</h5>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
						facilis tenetur architecto sint ipsum sed, at cum omnis similique
						reprehenderit corporis dolore suscipit impedit est et eius
						perspiciatis officia voluptas!
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
