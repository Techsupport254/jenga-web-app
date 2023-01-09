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

	// next modal id button
	const nextModal = () => {
		const nextId = modalData.id + 1;
		setModalData(getProjectData(nextId));
		setModalOpen(true);

		// get maximum and minimum length
		const max = ProjectsData.length;
		const min = 1;

		if (nextId > max) {
			setModalData(getProjectData(1));
			setModalOpen(true);
		}
	};

	// prev modal id button
	const prevModal = () => {
		const prevId = modalData.id - 1;
		setModalData(getProjectData(prevId));
		setModalOpen(true);
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
										<button className="Prev"
											style={
												modalData.id === 1
													? { display: "none" }
													: { display: "flex" }

											}
											onClick={() => prevModal()}
										>
											<i className="fas fa-chevron-left"></i>
										</button>
										<button className="Next"
											onClick={() => nextModal()}
										>
											<i className="fas fa-chevron-right"></i>
										</button>
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
												>
													{modalData.status}
												</span>
												<span>Location: {modalData.location}</span>
												<span>Budget: $ {modalData.budget}</span>
												<span>Category: {modalData.category}</span>
											</div>
											<div className="Right">
												<h3>About</h3>
												<span>Roofing: {modalData.materials.roofing}</span>
												<span>Walls: {modalData.materials.walls}</span>
												<span>Floor: {modalData.materials.floor}</span>
												<span>Windows: {modalData.materials.windows}</span>
												<span>Doors: {modalData.materials.doors}</span>
												<span>Plumbing: {modalData.materials.plumbing}</span>
												<span>Electrical: {modalData.materials.electrical}</span>
												<span>Appliances: {modalData.materials.appliance}</span>
												<span>Other: {modalData.materials.other}</span>
												<h3>Description</h3>
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
