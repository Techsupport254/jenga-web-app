// test navbar
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../../src/components/Navbar/Navbar";

test("renders navbar", () => {
	render(
		<Router>
			<Navbar />
		</Router>
	);
	const navbarElement = screen.getByTestId("navbar");
	expect(navbarElement).toBeInTheDocument();
});
