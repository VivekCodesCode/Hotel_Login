import React from "react";
import Item from "./Item";
import Navbar from "./Navbar";
import Catr_button from "./Catr_button";
import Button from 'react-bootstrap/Button';
import { useSelector } from "react-redux";
import "../CSS/Item.css";
import "../CSS/Login.css";
import axios from "axios";

// This is a navbar
function Cart() {
  const amount = useSelector((state) => state.amount.firstArray); // useSelector hook to read the state
  const amount2 = useSelector((state) => state.amount.secondArray); 
  const hotel_id = useSelector((state) => state.amount.thirdArray);
    console.log("babu babu---->"+hotel_id)
  console.log("Amount array:", amount); // Log the amount array to verify its contents
  function place_final_order(params) {
    axios.post("https://hotelloginbackend.onrender.com/api/final_order",{amount,amount2:[amount2[0]]})
    .then((res) => {
        console.log(res.data);
    })
    .catch((error) => {
        console.error(error);
    });

   console.log("he he he he"+hotel_id);
  }
  return (
    <>
      <Navbar />
      
      <br />
      <br />
      {!amount.length? (
        <h1 className="nothing_found">Your Cart Is Empty</h1>
        
      ) : (
        <>
        <div className='hotel_cart_container'>
          {amount.map((val, index) => (
            <Item
              key={index}
              id={index}
              image={val.image}
              name={val.title}
              price={val.price}
              table={amount2}
            />
          ))}
         <center>
         <Button onClick={place_final_order} className="hotel_items_submit" variant="primary">SUBMIT</Button>
       </center>
        </div>
    
         
       </>
      )}
    </>
  );
}

export default Cart;
