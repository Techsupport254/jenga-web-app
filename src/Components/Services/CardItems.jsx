import React from "react";
import "./CardItems.css";
import { ServicesData } from "../../Data";

const CardItems = () => {
	return (
		<div className="Services">
			<h3 className="heading">** Our Services **</h3>
			<div className="ServicesContainer">
				<div className="ServicesWrapper">
					{ServicesData.map((item, index) => {
						return (
							<div className="ServiceCard" key={index}>
								<div className="icon">{item.icon}</div>
								<h3>{item.title}</h3>
								<p>{item.description}</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default CardItems;
