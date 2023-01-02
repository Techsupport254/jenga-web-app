import React, { useState } from "react";
import { ProjectsData } from "../../Data";
import "./Projects.css";

const Projects = () => {
	const [showModal, setShowModal] = useState(false);

	const toggleModal = () => {
		setShowModal(!showModal);
	}
	return (
		<div className="Projects">
			<h3 className="heading">** Recent Projects **</h3>
			<div className="ProjectsContainer">
				{ProjectsData.map((item, index) => {
					return (
						<div className="ProjectCard" key={index}>
							<div className="ProjectImage">
								<img src={item.image} alt={item.title} />
							</div>
							<div className="ProjectInfo">
								<h3>{item.title}</h3>
								<span>
									<span>{item.location}</span> | <span>$ {item.budget}</span>
								</span>
								<p>{item.description}</p>
							</div>
							<button className="btn"
								onClick={toggleModal}
							>View More</button>
							{showModal && (
								<div className="Modal">
									<div className="ModalContainer">
										<div className="modal-content">
											<div className="modal-header">
												<h3>{item.title}</h3>
												<span
													className="close"
													onClick={toggleModal}
												>&times;</span>
											</div>
											<div className="modal-body">
												<p>{item.description}</p>
											</div>
											<div className="modal-footer">
												<button
													className="btn"
													onClick={toggleModal}
												>Close</button>
											</div>
										</div>
									</div>
								</div>
							)}
						</div>
					);
				})}

			</div>
		</div>
	);
};

export default Projects;
