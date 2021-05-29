import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const About = () => {
    return (
        <div id="About" className="mt-5 pt-5" >
            <div className="mt-5">
                <div className="text-center">
                    <h1 className="text-light" style={{ fontSize: "65px" }}>How We Work</h1>
                </div>
                <div className="row mx-3 d-flex justify-content-center">
                    <div className="card h-100 shadow-lg col-md-2 m-3">
                        <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_nfzjxjbh.json" background="transparent" speed="1" loop style={{ width: '264px', height: '300px' }} autoplay></lottie-player>
                        <div className="card-body">
                            <h4>Expert Chefs</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button className="btn btn-secondary w-100"><FontAwesomeIcon icon={faChalkboardTeacher} /> Learn More</button>
                        </div>
                    </div>
                    <div className="card h-100 shadow-lg col-md-2 m-3">
                        <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_iusm7qtm.json" background="transparent" speed="1" loop style={{ width: '264px', height: '300px' }} autoplay></lottie-player>
                        <div className="card-body">
                            <h4>Fast Delivery</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button className="btn btn-secondary w-100"><FontAwesomeIcon icon={faChalkboardTeacher} /> Learn More</button>
                        </div>
                    </div>
                    <div className="card w-100 h-100 shadow-lg col-md-2 m-3">
                        <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_XYcMR2.json" background="transparent" speed="1" loop style={{ width: '264px', height: '300px' }} autoplay></lottie-player>
                        <div className="card-body">
                            <h4>Fresh Foods</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button className="btn btn-secondary w-100"><FontAwesomeIcon icon={faChalkboardTeacher} /> Learn More</button>
                        </div>
                    </div>
                    <div className="card h-100 shadow-lg col-md-2 m-3">
                        <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_ur7sluxh.json" background="transparent" speed="1"
                            style={{ width: '264px', height: '300px' }}
                            loop autoplay></lottie-player>
                        <div className="card-body">
                            <h4>10 Years Experience</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button className="btn btn-secondary w-100"><FontAwesomeIcon icon={faChalkboardTeacher} /> Learn More</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;