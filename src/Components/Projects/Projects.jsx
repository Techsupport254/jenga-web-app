import React, { useState } from "react";
import { ProjectsData } from "../../Data";
import "./Projects.css";

const Projects = ({ id }) => {
	// Declare state variables to store the data for the modal and whether the modal is open
	const [modalData, setModalData] = useState({});
	const [modalOpen, setModalOpen] = useState(false);

	// Retrieve the data for the project with the specified ID from the ProjectsData component
	const getProjectData = (id) => {
		const project = ProjectsData.find((project) => project.id === id);
		return project;
	};

	// Open the modal and set the modal data to the data for the project with the specified ID
	const openModal = (id) => {
		setModalData(getProjectData(id));
		setModalOpen(true);
	};

	// Close the modal
	const closeModal = () => {
		setModalOpen(false);
	};

	// change color of status
	const statusColor = (status) => {
		if (status === "Completed") {
			return "green";
		} else if (status === "In Progress") {
			return "orange";
		} else {
			return "red";
		}
	};

	// next and previous buttons


	// Return the JSX for the Projects component
	return (
		<div className="Projects">
			<h3 className="heading">** Recent Projects **</h3>
			<div className="ProjectsContainer">
				{ProjectsData.map((project) => (
					<div className="ProjectCard" key={project.id}>
						<img src={project.image} alt={project.title} />
						<div className="ProjectInfo">
							<h3>{project.title}</h3>
							<p>{project.description}</p>
							<button
								className="MoreItems"
								onClick={() => openModal(project.id)}
							>
								More
							</button>
							{modalOpen && (
								<div className="Modal" key={id}>
								<div className="NextPrev">
									
								</div>
									<div className="ModalContainer">
										<div className="CloseModal" onClick={() => closeModal()}>
											<i className="fas fa-times"></i>
										</div>
										<h3 className="heading">{modalData.title}</h3>
										<div className="ModalBody">
											<div className="Left">
												<img src={modalData.image} alt={modalData.title} />
												<span
													className="status"
													style={{ color: statusColor(modalData.status) }}
												>{modalData.status}</span>
												<span>Location: {modalData.location}</span>
												<span>Budget: $ {modalData.budget}</span>
												<span>Duration: {modalData.time}</span>
											</div>
											<div className="Right">
												<p>{modalData.description}</p>
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
