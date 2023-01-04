import React, { useState } from "react";
import { ProjectsData } from "../../Data";
import "./Projects.css";

const Projects = () => {
	const [showModal, setShowModal] = useState(false);
	return (
		<div className="Projects">
			<h3 className="heading">** Recent Projects **</h3>
			<div className="ProjectsContainer">
				{ProjectsData.map((item, index) => {

					const toggleModal = () => {
						setShowModal(!showModal);
					};

					return (
						<div className="ProjectCard" key={index} onClick={toggleModal}>
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
							<button className="btn" onClick={toggleModal}>
								View More
							</button>
							{showModal && (
								<div className="Modal" key={index}>
									<div className="ModalContainer">
										<div className="ModalContent">
											<div className="ModalHeader">
												<h3 className="heading">{item.title}</h3>
												<span className="close" onClick={toggleModal}>
													&times;
												</span>
											</div>
											<div className="ModalBody">
												<div className="Right">
													<img src={item.image} alt={item.title} />
													<span>
														<span>{item.location}</span> |{" "}
														<span>$ {item.budget}</span>
													</span>
												</div>
												<div className="Left">
													<p>{item.description}</p>
												</div>
											</div>
											<div className="modal-footer">
												<button className="btn" onClick={toggleModal}>
													Close
												</button>
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
