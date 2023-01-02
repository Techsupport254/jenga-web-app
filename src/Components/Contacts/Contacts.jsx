import React from "react";
import "./Contacts.css";

const Contacts = () => {
	return (
		<div className="Contacts">
			<h3 className="heading">** Contact Us **</h3>
			<div className="ContactsContainer">
				<div className="ContactsWrapper">
					<div className="ContactCard">
						<h3>Send a message</h3>
						<form>
							<input
								type="text"
								id="name"
								name="name"
								placeholder="Your name.."
							></input>
							<input
								type="text"
								id="email"
								name="email"
								placeholder="Your email.."
							></input>
							<textarea
								id="subject"
								name="subject"
								placeholder="Write something.."
							></textarea>
							<input type="submit" value="Submit"></input>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contacts;
