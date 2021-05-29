import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import FoodsInfo from '../FoodsInfo/FoodsInfo';
import './FoodCards.css'

const FoodCards = () => {
    const foods = useSelector((state) => {
        return state.foods.foodsList;
    })
    console.log("Food", foods);
    return (

        <div id="Foods" className="mt-5 pt-5">
            <div className="text-center">
                <h1 className="text-light p-5" style={{ fontSize: "65px" }}>Foods We Provide</h1>
            </div>
            <div className="row  d-flex justify-content-center ">

                {
                    foods?.map(food => <FoodsInfo food={food}></FoodsInfo>)
                }
            </div >
        </div>
    );
};

export default FoodCards;