import React, { useState } from "react";
import { ProjectsData } from "../../Data";
import "./Projects.css";

const Projects = () => {
	const [showModal, setShowModal] = useState(false);
	// clicked project
	const [selectedProject, setSelectedProject] = useState({});

	const handleShowModal = (id) => {
		setShowModal(true);

		const project = ProjectsData.find((project) => project.id === id);
		setSelectedProject(project);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	const statusColor = (status) => {
		if (status === "Completed") {
			return "green";
		} else if (status === "In Progress") {
			return "orange";
		} else {
			return "red";
		}
	};

	return (
		<div className="Projects">
			<h3 className="heading">Recent Projects</h3>
			<div className="ProjectsContainer">
				{ProjectsData.map((project) => (
					<div className="ProjectCard" key={project.id}>
						<div className="ProjectImage">
							<img src={project.image} alt={project.title} />
						</div>
						<div className="ProjectInfo">
							<h3>{project.title}</h3>
							<p>{project.description}</p>
							<button
								className="MoreItems"
								onClick={() => {
									handleShowModal(project.id);
								}}
							>
								More
								<i className="fas fa-external-link-alt"></i>
							</button>
							{showModal && selectedProject && (
								<div className="Modal" key={project.id}>
									<div className="NextPrev">
										<button
											className="Prev"
											onClick={() => {
												handleShowModal(project.id - 1);
											}}
										>
											<i className="fas fa-chevron-left"></i>
										</button>
										<button
											className="Next"
											onClick={() => {
												handleShowModal(project.id + 1);
											}}
										>
											<i className="fas fa-chevron-right"></i>
										</button>
									</div>
									<div className="ModalContainer">
										<div className="ModalHeader">
											<h3 className="heading">{project.title}</h3>
											<div className="CloseModal">
												<i
													className="fas fa-times"
													onClick={handleCloseModal}
												></i>
											</div>
										</div>
										<div className="ModalBody">
											<div className="Right">
												<img src={project.image} alt={project.title} />
												<span>Location: {project.location}</span>
												<span
													style={{
														color: statusColor(project.status),
													}}
												>
													{project.status}
												</span>
												<span>Estimate Budget: $ {project.budget}</span>
												<span>Estimate Time: {project.time}</span>
												<span>Category: {project.category}</span>
												<span>Technologies: {project.technologies}</span>
											</div>
											<div className="Left">
												<p>{project.description}</p>
											</div>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
