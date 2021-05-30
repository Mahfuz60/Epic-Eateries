import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, CardColumns, CardDeck, Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';
import { order } from '../../Redux/Action/foodAction';

const FoodsInfo = (props) => {
    const { foodName, image, price } = props.food
    const dispatch = useDispatch()

    // const history = useHistory()
    // const handleOrder = (foodName) => {
    //     history.push(`/confirm/${foodName}`)
    // }
    return (
        <div className="card m-5 col-md-2  col-sm-4 ">

            <div className="row ">

                <div style={{ backgroundColor: "#050c1a" }} class="card focus text-light">
                    <img style={{ height: "200px" }} class=" img-fluid" src={image} alt="" />
                    <div class="card-body ">
                        <h5 class="card-title">Food Name : {foodName}</h5>
                        <p class="card-text">Food is maybe the only universal thing that really has the power to bring everyone together.</p>
                        <h5>Price : {price} $</h5>
                    </div>
                    <button onClick={() => dispatch(order(props.food), Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Your Order has been saved',
                        showConfirmButton: false,
                        timer: 1000
                    }))} className="btn btn-lg m-3 text-light btn-danger fw-bold"><FontAwesomeIcon icon={faShoppingCart} /> Order Now</button>

                </div>
            </div>
        </div>

    );
};

export default FoodsInfo;