import React, { useState } from "react";
import images1 from './img/2223.jpg'
import './Card.css'

const Card = () => {

    const [name, setName] = useState('Abdurashid Nabijonov');
    const [job, setJob] = useState('Frontend Developer');
    const [about, setAbout] = useState('I have 1.5 experience on it. I have done working on ptoject for 1.5 years. I have done many projects using HTML, CSS, SASS, SCSSS, Tailwind, Bootstrap,JQuery and JavaScript. Also I have professional skil React.js. In these days I am working at company Technoback with my Teammates.');

    return (
        <>
            <div className="Card">
                <div className="upper-container">
                    <div className="image-container">
                        <img src={images1} alt="" height="100px" width="100px" />
                    </div>
                </div>
                <div className="lower-container">
                    <h3>{name}</h3>
                    <h4>{job}</h4>
                    <p>{about}</p>
                    <button><a href="https://abdurashidnabijonov.netlify.app/">Visit Profile</a></button>
                </div>
            </div>
        </>
    )
}
export default Card;