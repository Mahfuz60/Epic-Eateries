import React from 'react';
import { Card } from 'react-bootstrap';

const OrderedFoodsCard = (props) => {
    const { foodName, image, price } = props.food
    return (
        <div className="card m-1 col-md-3 m-3 col-sm-4 ">
            <div className="row ">
                <div style={{ backgroundColor: "#050c1a" }} class="card focus text-light ">
                    <img style={{ height: "200px" }} class=" img-fluid" src={image} alt="" />
                    <div class="card-body">
                        <h5 class="card-title">{foodName}</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <h5>Price : {price} $</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderedFoodsCard;