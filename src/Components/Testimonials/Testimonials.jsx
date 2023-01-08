import React, { useState } from "react";
import { TestimonialsData } from "../../Data";
import "./Testimonials.css";

const Testimonials = () => {
    // open modal
    const [openModal, setOpenModal] = useState(false);

    // open modal
    const openModalHandler = () => {
        setOpenModal(true);
    };

    // click outside modal to close
    const clickOutsideHandler = (e) => {
        if (e.target.classList.contains("Modal")) {
            setOpenModal(false);
        }
    };
    return (
        <div className="Testimonials Animated">
            <h3 className="heading">" What People Say "</h3>
            <div className="TestimonialsContainer">
                {TestimonialsData.map((item, index) => {
                    return (
                        <div className="TestimonialCard" key={index}>
                            <div className="TestimonialImage">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className="TestimonialInfo">
                                <h3>{item.name}</h3>
                                <span>{item.occupation}</span>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    );
                })}
                <div className="SaySomething">
                    <h3>Want to say something?</h3>
                    <div className="TestimonialButtons">
                        <button
                            className="Button"
                            onClick={openModalHandler}
                        >Yes</button>
                        {
                            openModal && (
                                <div className="Modal" onClick={clickOutsideHandler}>
                                    <div className="ModalContainer">
                                        <div className="ModalBody">
                                            <div className="Right">
                                            </div>
                                            <div className="Left">
                                                <div className="ModalHeader">
                                                    <h3 className="heading">
                                                        Comment Here <i className="fas fa-comment"></i>
                                                    </h3>
                                                </div>
                                                <form action="">
                                                    <input type="text" id="name" placeholder="Name" />
                                                    <input type="email" id="email" placeholder="Email" />
                                                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Your Comment"></textarea>
                                                    <button className="Comment">
                                                        Comment
                                                        <i className="fas fa-paper-plane"></i>
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
