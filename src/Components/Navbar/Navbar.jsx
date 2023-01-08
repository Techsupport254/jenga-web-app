import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/IMGS/logo.png";
import { menuData } from "../../Data";
import "./Navbar.css";

const Navbar = () => {
	const [Click, setClick] = useState(false);
	const handleClick = () => setClick(!Click);
	const closeMobileMenu = () => setClick(false);
	// searchbar
	const [search, setSearch] = useState("");

	const handleSearch = (e) => {
		setSearch(e.target.value);
	};

	return (
		<>
			<nav className="Navbar" id="Navbar">
				<div className="NavbarContainer">
					<Link to="/" className="NavbarLogo">
						<img src={Logo} alt="Logo" />
						<span>Jenga</span>
					</Link>
					<div className="SearchBox">
						<input
							type="text"
							placeholder="Search"
							value={search}
							onChange={handleSearch}
						/>
						<i
							className="fas fa-search"
							onClick={() => {
								closeMobileMenu();
							}}
						/>
					</div>
					<div className="MenuIcon">
						<i
							className={Click ? "fas fa-times" : "fas fa-bars"}
							onClick={handleClick}
						/>
					</div>
					<ul className={Click ? "NavbarMenu active" : "NavbarMenu"}>
						{menuData.map((item, index) => {
							const ScrollToClass = () => {
								const element = document.querySelector(item.path);
								element.scrollIntoView({
									behavior: "smooth",
									block: "start",
								});
							};
							return (
								<li
									className="NavItem"
									key={index}
									// close mobile menu and navigate to class when a link is clicked
									onClick={() => {
										closeMobileMenu();
										ScrollToClass();
									}}
								>
									<Link to={item.link} className="NavLinks" />
									{item.title}
								</li>
							);
						})}
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
