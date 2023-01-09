import card1 from "./Assets/IMGS/card1.jpg";
import card2 from "./Assets/IMGS/card2.jpg";
import card3 from "./Assets/IMGS/card3.jpg";

import img1 from "./Assets/IMGS/victor-quaint.jpeg";
import img2 from "./Assets/IMGS/hilma-marie.jpg";
import img3 from "./Assets/IMGS/mike-tev.jpeg";
// navbar menu data
export const menuData = [
	{
		title: "Home",
		link: "/",
		path: ".Home",
	},
	{
		title: "About",
		link: "/about",
		path: ".About",
	},
	{
		title: "Services",
		link: "/services",
		path: ".Services",
	},
	{
		title: "Projects",
		link: "/projects",
		path: ".Projects",
	},
	{
		title: "Contact",
		link: "/contact",
		path: ".Contact",
	},
];

// Services data
export const ServicesData = [
	{
		id: 1,
		title: "Design",
		icon: <i className="fas fa-paint-brush"></i>,
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
	},
	{
		id: 2,
		title: "Construction",
		icon: <i className="fas fa-hard-hat"></i>,
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
	},
	{
		id: 3,
		title: "Renovation",
		icon: <i className="fas fa-tools"></i>,
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
	},
	{
		id: 4,
		title: "Interior Design",
		icon: <i className="fas fa-couch"></i>,
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
	},
	{
		id: 5,
		title: "Exterior Design",
		icon: <i className="fas fa-archway"></i>,
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
	},
	{
		id: 6,
		title: "Architecture",
		icon: <i className="fas fa-city"></i>,
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
	},
];
// ProjectsData
export const ProjectsData = [
	{
		id: 1,
		title: "Project 1",
		location: "Kilimani",
		budget: 1000000,
		status: "Completed",
		time: "",
		category: "Mansions",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
		image: card1,
		materials: {
			roofing: "Tiles",
			flooring: "Tiles",
			walls: "Bricks",
			floor: "Tiles",
			ceiling: "Tiles",
			doors: "Wooden and reinforced with steel",
			windows: "steel",
			plumbing: "",
			electrical: "",
			appliances: "",
			other: "",
		},
		about: "lorem",
	},
	{
		id: 2,
		title: "Project 2",
		location: "Kileleshwa",
		budget: 500000,
		status: "In Progress",
		time: "",
		category: "Mansions",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
		image: card2,
		materials: "",
	},
	{
		id: 3,
		title: "Project 3",
		location: "Lavington",
		budget: 200000,
		status: "Not Started",
		time: "",
		category: "Mansions",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
		image: card3,
		materials: "",
	},
	{
		id: 4,
		title: "Project 4",
		location: "Kilimani",
		budget: 1000000,
		status: "Completed",
		time: "",
		category: "Mansions",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
		image: card1,
		materials: "",
	},
	{
		id: 5,
		title: "Project 5",
		location: "Kileleshwa",
		budget: 500000,
		status: "In Progress",
		time: "",
		category: "Mansions",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
		image: card2,
		materials: "",
	},
	{
		id: 6,
		title: "Project 6",
		location: "Lavington",
		budget: 200000,
		status: "Not Started",
		time: "",
		category: "Mansions",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
		image: card3,
		materials: "",
	},
	{
		id: 7,
		title: "Project 7",
		location: "Kilimani",
		budget: 1000000,
		status: "Completed",
		time: "",
		category: "Mansions",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
		image: card1,
		materials: "",
	},
];

// Testimonials Data
export const TestimonialsData = [
	{
		name: "Victor Quaint",
		occupation: "CEO of Company",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
		image: img1,
	},
	{
		name: "Hilma Kade",
		occupation: "CEO of Company",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
		image: img2,
	},
	{
		name: "Mike Tev",
		occupation: "CEO of Company",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
		image: img3,
	},
];
