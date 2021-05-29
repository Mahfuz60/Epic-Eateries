import { Button, Col, Container, Row } from 'react-bootstrap';
import React from 'react';
import Appbar from '../../HomePage/Appbar/Appbar';
import Swal from 'sweetalert2';
import './OrderedFood.css'
import { useSelector } from 'react-redux';

import OrderedFoodsCard from '../OrderedFoodsCard/OrderedFoodsCard';

const OrderedFood = () => {
    const foods = useSelector((state) => {
        return state.foods.orderedList;
    })
    // const { foodName } = useParams();

    // const order = fakeData.find(food => food.foodName === foodName)

    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const confirm = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })
        swalWithBootstrapButtons.fire({
            title: 'Are you sure to Order this food?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Order it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    'Ordered!',
                    'Your food has been Successfully ordered.',
                    'success'
                )
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your order has been Cancelled',
                    'error'
                )
            }
        })
    }




    return (
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
                            <Button onClick={confirm} variant="secondary">Confirm Order</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default OrderedFood;