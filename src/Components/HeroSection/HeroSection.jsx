import React from 'react'
import './HeroSection.css'

const HeroSection = () => {
    return (
        <div className="HeroSection">
            <div className="HeroContainer">
                <h2>Build your home</h2>
                <p>Build your home with us</p>
                <div className="btns">
                    <button className='btn-primary'>Contact Us</button>
                    <button className='btn'>View More</button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection