import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Icon from '../../../Images/Icon.png'

const Appbar = () => {
    return (
        <div >
            <Navbar style={{ backgroundColor: "#050c1a", color: "white" }} collapseOnSelect expand="lg" variant="dark" fixed="top">
                <img style={{ width: '50px' }} src={Icon} alt="" />
                <Navbar.Brand href="#home"><strong className="pl-1 h2">Epic Eateries</strong></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to='/home' href="#Home"><strong class="h4">Home</strong></Nav.Link>
                        <Nav.Link href="#About"><strong class="h4">About</strong></Nav.Link>
                        <Nav.Link href="#Foods"><strong class="h4">Foods</strong></Nav.Link>
                        <Nav.Link href="#Contact"><strong class="h4">Contact</strong></Nav.Link>
                        <Nav.Link as={Link} to='/confirm/:foodName' href="#Orders"><strong class="h4">Orders</strong></Nav.Link>
                        <Nav.Link as={Link} to='/login' href="#SignIn"><strong class="h4">Sign In</strong></Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Appbar;