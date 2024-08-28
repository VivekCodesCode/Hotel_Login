import '../App.css';
import image from "./Images/Vegetable-Biryani-Instant-Pot-Piping-Pot-Curry-4.jpg"
import "../CSS/Item.css"
import "../CSS/Login.css"
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { actionCreators } from "../State/index";
function Item(props) {
    const [val, newval] = useState(1);
  
   const dispatch=useDispatch();
   const amount = useSelector((state) => state.amount.firstArray);
   const hotel_id = useSelector((state) => state.amount.thirdArray);
    function increaseQuantity(key) {
        console.log("wergerg---------------------------------------?"+hotel_id);
        newval(val + 1)
        console.log("Hello");
        dispatch(actionCreators.set_quantity(key));
        amount.forEach(item => console.log(item));
        
    }
    function decreaseQuantity(bet,key) {
        if (val != 1){ 
            newval(val - 1);
            // dispatch(set_quantity.withdrawMoney(key));   
        }
        else {
          //props.index
          
          dispatch(actionCreators.withdrawMoney(bet));
          console.log(bet);
        }
    }
    return (
        <>
        
            <div class="hotel_cart">
                <div class="details">
                    <div class="title">{props.name}</div>
                    <div class="subtitle">The best dishes</div>
                    <div className='item_details'>
                        <div class="price">{`Rs. ${props.price}`}</div>
                        <div class="quantity">
                            <Button variant="light" className='items_quantity_button' onClick={()=>decreaseQuantity(props.name,props.name)}>-</Button>
                            <span className='hotel_cart_input' type="text" id="quantity" value={val} >{val}</span>
                            <Button variant="light" className='items_quantity_button' onClick={()=>{increaseQuantity(props.name)}}>+</Button>
                        </div>
                    </div>
                </div>

                <div class="image">
                    <img src={props.image} alt="Treatment Kit" />
                </div>
            </div>
          
          <center><hr /></center> 
        </>
    );
}

export default Item;
