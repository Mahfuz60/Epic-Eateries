import React from 'react';
import { Navbar } from 'react-bootstrap';
import About from '../About/About';
import Appbar from '../Appbar/Appbar';
import FoodCards from '../FoodCards/FoodCards';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div style={{ backgroundColor: '#12161f' }}>
            <Appbar></Appbar>
            <Header></Header>
            <About></About>
            <FoodCards></FoodCards>
            <Footer />
        </div>
    );
};

export default Home;