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




    let display;
    if (orderFoods) {
        display =
            <div>
                <Appbar></Appbar>
                <Container style={{ paddingBottom: "210px" }} id="Contact" className=" mt-5 mb-5 pt-5" fluid>
                    <Row className=" mt-5">
                        <Col md={2}></Col>
                        <Col className="text-center " md={4}>
                            <Payment></Payment>
                        </Col>
                        <Col md={4}>
                            <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_yzoqyyqf.json" background="transparent" speed="1" loop autoplay></lottie-player>
                        </Col>
                        <Col md={2}></Col>
                    </Row>
                </Container>
            </div>


    }
    else {
        display =
            <div>
                <Appbar></Appbar>
                <Container id="Contact" className=" mt-5 mb-5 pb-5" fluid>
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
                            <div style={{ marginTop: "100px", marginBottom: "250px" }} id="booking-area" className="booking-form text-light">
                                <div className="input-group required">
                                    <label for="">Your Name</label>
                                    <input className="inp-style text-light" type="text" name="" placeholder="Write Your Name" />
                                </div>
                                <div className="input-group required">
                                    <label for="">Your Phone Number</label>
                                    <input className="inp-style text-light" type="text" name="" placeholder="Write Your Phone Number" />
                                </div>
                                <div className="input-group required">
                                    <label for="">Delivered Location</label>
                                    <input className="inp-style text-light" type="text" name="" placeholder="Write Your Location" />
                                </div>
                                <div className="inputs">
                                    <div className="input-group required">
                                        <label for="">Order Date</label>
                                        <input className="inp-style text-light" type="date" name="" />
                                    </div>
                                </div>
                                <Button onClick={() => setOrderFoods(!orderFoods)} variant="secondary" className="btn-lg btn-danger" block>Confirm</Button>
                            </div>


                        </Col>
                    </Row>
                </Container>
            </div>


    }


    return (
        <div>
            {display}
        </div>
    );
};

export default OrderedFood;