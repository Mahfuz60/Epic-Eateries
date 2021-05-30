import { Button, Col, Container, Row } from 'react-bootstrap';
import React, { useState } from 'react';
import Appbar from '../../HomePage/Appbar/Appbar';
import Swal from 'sweetalert2';
import './OrderedFood.css'
import { useSelector } from 'react-redux';

import OrderedFoodsCard from '../OrderedFoodsCard/OrderedFoodsCard';
import Payment from '../Payments/Payment/Payment';

const OrderedFood = () => {
    const foods = useSelector((state) => {
        return state.foods.orderedList;
    })
    // const { foodName } = useParams();

    // const order = fakeData.find(food => food.foodName === foodName)

    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [orderFoods, setOrderFoods] = useState(false)


    const confirm = () => {


    }

    let display;
    if (orderFoods) {
        display =
            <Payment></Payment>
    }
    else {
        display =
            <div style={{ marginTop: "100px" }} id="booking-area" className="booking-form ">
                <div className="input-group">
                    <label for="">Your Name</label>
                    <input className="inp-style" type="text" name="" placeholder="Write Your Name" />
                </div>
                <div className="input-group">
                    <label for="">Your Phone Number</label>
                    <input className="inp-style" type="text" name="" placeholder="Write Your Phone Number" />
                </div>
                <div className="input-group">
                    <label for="">Delivered Location</label>
                    <input className="inp-style" type="text" name="" placeholder="Write Your Location" />
                </div>
                <div className="inputs">
                    <div className="input-group">
                        <label for="">Order Date</label>
                        <input className="inp-style" type="date" name="" />
                    </div>
                </div>
                <Button onClick={() => setOrderFoods(!orderFoods)} variant="secondary">Confirm Order</Button>
            </div>


    }


    return (
        <div>
            <Appbar></Appbar>
            <Container id="Contact" className=" mt-5 mb-5  pb-5" fluid>
                <Row className=" mt-5">
                    <Col md={7}>
                        <div style={{ marginTop: "100px" }} className="row d-flex justify-content-center">
                            {
                                foods?.length ?
                                    foods?.map(food => <OrderedFoodsCard food={food}></OrderedFoodsCard>)
                                    :
                                    <h1 className="text-light">You Didn't Ordered yet....!!!!</h1>
                            }
                        </div>
                    </Col>
                    <Col md={4} >
                        {display}

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default OrderedFood;