import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const About = () => {
    return (
        <div id="About" className="mt-5 pt-5 text-light" >
            <div className="mt-5">
                <div className="text-center">
                    <h1 className="text-light" style={{ fontSize: "65px", }}>How We Work</h1>
                </div>
                <div className="row mx-3 d-flex justify-content-center">
                    <div style={{ backgroundColor: "#050c1a", border: "1px solid white" }} className="card focus shadow-lg col-md-2 m-3">
                        <div className="card-body pt-4">
                            <lottie-player
                                src="https://assets8.lottiefiles.com/packages/lf20_nfzjxjbh.json"
                                background="transparent"
                                speed="1"
                                loop
                                autoplay>
                            </lottie-player>
                        </div>
                        <div className="card-body mt-5 pt-5">
                            <h4>Expert Chefs</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button className="btn btn-danger btn-lg w-100 "><FontAwesomeIcon icon={faChalkboardTeacher} /> Learn More</button>
                        </div>
                    </div>
                    <div style={{ backgroundColor: "#050c1a", border: "1px solid white" }} className="card focus shadow-lg col-md-2 m-3">
                        <div className="card-body">
                            <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_HBXF2O.json" background="transparent" speed="1" loop autoplay></lottie-player>
                        </div>
                        <div className="card-body">
                            <h4>Fast Delivery</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button className="btn btn-danger w-100  btn-lg"><FontAwesomeIcon icon={faChalkboardTeacher} /> Learn More</button>
                        </div>
                    </div>
                    <div style={{ backgroundColor: "#050c1a", border: "1px solid white" }} className="card focus shadow-lg col-md-2 m-3">
                        <div className="card-body">
                            <lottie-player src="https://assets5.lottiefiles.com/temporary_files/pMmxnV.json" background="transparent" speed="1" loop autoplay></lottie-player>
                        </div>
                        <div className="card-body">
                            <h4>Fresh Foods</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button className="btn btn-secondary w-100  btn-danger btn-lg"><FontAwesomeIcon icon={faChalkboardTeacher} /> Learn More</button>
                        </div>
                    </div>
                    <div style={{ backgroundColor: "#050c1a", border: "1px solid white" }} className="card focus shadow-lg col-md-2 m-3">
                        <div className="card-body">
                            <lottie-player
                                src="https://assets8.lottiefiles.com/packages/lf20_ur7sluxh.json"
                                background="transparent"
                                speed="1"
                                loop
                                autoplay>
                            </lottie-player>
                        </div>
                        <div className="card-body mt-4 pt-4">
                            <h4 >10 Years Experience</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button className="btn btn-danger btn-lg w-100  mt-4"><FontAwesomeIcon icon={faChalkboardTeacher} /> Learn More</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;