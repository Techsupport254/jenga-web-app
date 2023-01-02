import React from 'react'
import { TestimonialsData } from '../../Data'
import './Testimonials.css'

const Testimonials = () => {
    return (
        <div className="Testimonials">
            <h3 className='heading'>
                " What People Say "
            </h3>
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
                    )
                })
                }
            </div>
        </div>
    )
}

export default Testimonials