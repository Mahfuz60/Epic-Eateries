import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';

const Header = () => {
    return (
        <div className="header-bg mt-5 pt-5">
            <Container id="Home" className="text-light " fluid>
                <Row className=" d-flex align-items-center text-light offset-1 mt-5">
                    <Col data-aos="zoom-out" className=" pt-5" md={6}>
                        <h1 style={{ fontSize: "60px" }} >Fast Food Provider <br /> At Your Door</h1>
                        <Row>
                            <span >
                                <h1 style={{ fontSize: "60px" }}>
                                    <Typewriter
                                        options={{
                                            strings: ["Order Your Desire Foods", "From Anywhere", "At Any Time"],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </h1>
                            </span>

                        </Row>
                        <button style={{ fontSize: "30px" }} className="btn btn-danger btn-lg mr-5 mt-5"><FontAwesomeIcon icon={faChalkboardTeacher} /> Learn More</button>
                    </Col>
                    <Col xs={12} md={6}>
                        <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_ewndmrlq.json" background="transparent"
                            speed="1"
                            loop
                            autoplay></lottie-player>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;