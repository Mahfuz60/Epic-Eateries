import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterCol from '../FooterCol/FooterCol';
import Icon from '../../../Images/Icon.png'
const Footer = () => {

    const ourAddress = [
        { name: "Bashundhara, Dhaka" },
        { name: " Bangladesh" },

    ]
    const services = [
        { name: "Mahfuz Alam" },
        { name: "Abrar Abir" },
        { name: "Mohammad Eusha" }
    ]

    return (
        <footer id="Contact" className="footer-area  mt-5 ">
            <div className="container ">
                <div className="row py-5">
                    <div className="col-md-6">
                        <div className="d-flex ">
                            <h3 className="text-light fw-bolder ps-4"></h3>
                        </div>
                        <div className="d-flex">
                            <img style={{ width: '50px' }} src={Icon} alt="" />
                            <h4 className="text-light mt-2 ml-2">Epic Eateries</h4>
                        </div>
                        <p className="text-light mt-4">We have built our Food delivery site, to be specially optimized so we can provide exceptional food product services at an affordable rate.</p>
                    </div>
                    <FooterCol key={1} menuTitle="Founder" menuItems={services} />
                    <FooterCol key={2} menuTitle="Our Address" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon active-icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon active-icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-2">
                            <h6 className="text-light">Call now</h6>
                            <button className="btn btn-danger">+204565869</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center text-light p-4">
                    <p>Copyright {(new Date()).getFullYear()} Epic Eateries All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;