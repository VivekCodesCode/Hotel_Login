import React from "react";
import Item from "./Item";
import Navbar from "./Navbar";
import { actionCreators } from "../State";
import Catr_button from "./Catr_button";
import Button from 'react-bootstrap/Button';
import { useSelector } from "react-redux";
import "../CSS/Item.css";
import { useDispatch } from "react-redux";
import "../CSS/Login.css";
import axios from "axios";

// This is a navbar
function Cart() {
  const amount = useSelector((state) => state.amount.firstArray); // useSelector hook to read the state
  const amount2 = useSelector((state) => state.amount.secondArray); 
  const hotel_id = useSelector((state) => state.amount.thirdArray);
  const dispatch=useDispatch();
    console.log("babu babu---->"+hotel_id)
  console.log("Amount array:", amount); // Log the amount array to verify its contents
 async function place_final_order(params) {
  dispatch(actionCreators.empty_cart())
    console.log("items deleted");
    alert("Order Placed");
  await  axios.post("https://hotelloginbackend.onrender.com/api/final_order",{amount,amount2:[amount2[0]]})
    .then((res) => {
        console.log(res.data);
        
    })
    .catch((error) => {
        console.error(error);
    });
    
  
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
