import React from "react";
import Item from "./Item";
import  biryani from "./Images/Vegetable-Biryani-Instant-Pot-Piping-Pot-Curry-4.jpg";
import jalebi from "./Images/jalebi.jpg";
import paneer from "./Images/Paneer-Tikka.jpg"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import rajma from "./Images/rajma.webp"

function Catr_button(params) {
    function hotel_cart_submit(params) {
         alert("Order Placed");
    }
    return(
    <>
     <Button onClick={hotel_cart_submit} className="hotel_items_submit" variant="primary">SUBMIT</Button>
    </>
    );
}

export default Catr_button;


//This is a Cart_button page