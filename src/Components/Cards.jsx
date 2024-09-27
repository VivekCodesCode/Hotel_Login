
import React, { useEffect, useState } from 'react';
import './Cards.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import CustomCarousel from './CustomCarousel';
import "../CSS/Item.css"
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import Footer from "./Footer"
import { Button } from 'react-bootstrap';
import { useSelector } from "react-redux";
import {Link} from "react-router-dom"

import { bindActionCreators } from "redux";
import { actionCreators } from "../State/index";
import { FaStar } from 'react-icons/fa';
import Model from './Model';
import axios from 'axios';

const Cards = () => {
    const initialState = [false, false, false, false, false, false, false, false];
    // Adjust size based on number of cards
    const arr2 = new Array(60).fill(false);
    
    const [isExpanded, setIsExpanded] = useState(initialState);
    const[load_display,set_load_display]=useState("block")
    const[search_display,set_search_display]=useState("none");
    const[cardALert,setCardAlert]=useState(false)
    const[items,setItems]=useState(0);
    const[color,setcolor]=useState("block")
    const[addToCart,setaddToCart]=useState(arr2);
    const[cardData,setCardData]=useState([]);
    const dispatch=useDispatch()
    const[filter_items,set_filteritems]=useState("")
    const amount = useSelector((state) => state.amount.secondArray); 
    const amount2 = useSelector((state) => state.amount.thirdArray); 
    //console.log("IUWEFEGFYUEVFYUVEUYFVEYU---->"+amount)
    const toggleReadMore = (index) => {
        const updatedState = isExpanded.map((item, idx) => idx === index ? !item : item);
        setIsExpanded(updatedState);
    };
    function onchange_listner(params) {
        set_filteritems(params.target.value);
        //console.log(filter_items);
    }
    function hide_add(index) {
          let temp= addToCart.map((val, idx)=>{
            if(idx==index){
                return true;
            }
           else return val;
          });
          setaddToCart(temp);
          //console.log(addToCart)
    }
    useEffect(()=>{
       
       axios.get("https://hotelloginbackend.onrender.com/api/product").then((res)=>{
        //console.log(res.data.data.productData)
        setCardData(res.data.data.productData);
        set_load_display("none")
        set_search_display("block")
    
       })
       //console.log(cardData);
       console.log("33"+amount2)
    },[]);

    
    <style>
        
    </style>

    return (
        <div>
            <div className="container">
          <div className="loader" style={{display:load_display}}>  
            </div>
                <div className="row">
                    <div className="col-lg-12 over-flow-set">
                        <div className="scroll-nav">
                            <ul className="nav over-flow-set nav-pills mb-3 justify-content-around " id="pills-tab" role="tablist">
                                <li className="nav-item shadow-sm mb-1" role="presentation">
                                    <button  className="nav-link selected-nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">All Items</button>
                                </li>
                                
                            
                            
                            <li className="nav-item shadow-sm mb-1" role="presentation">
                                <button className="nav-link selected-nav-link" id="pills-contact-tab1" data-bs-toggle="pill" data-bs-target="#pills-contact1" type="button" role="tab" aria-controls="pills-contact1" aria-selected="false">Breads</button>
                            </li>
                            
                            
                            <li className="nav-item shadow-sm mb-1" role="presentation">
                                <button className="nav-link selected-nav-link" id="pills-contact-tab4" data-bs-toggle="pill" data-bs-target="#pills-contact4" type="button" role="tab" aria-controls="pills-contact4" aria-selected="false">Sweets</button>
                            </li>
                            <li className="nav-item shadow-sm mb-1" role="presentation">
                                <button className="nav-link selected-nav-link" id="pills-contact-tab5" data-bs-toggle="pill" data-bs-target="#pills-contact5" type="button" role="tab" aria-controls="pills-contact5" aria-selected="false">Cold Drinks</button>
                            </li>
                                
                                {/* Other nav items */}
                            </ul>
                        </div>
                        
                        <div className="tab-content cards-detail" id="pills-tabContent">
                     
                            {/* ----------------Tab-1-------------------------------------------- */}
                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                               
                            <div  style={{display:search_display}}className='cards_search_food pt-4'> <InputGroup  style={{display:{search_display}}} className="mb-3 " onChange={onchange_listner}>
        <Form.Control style={{display:{search_display}}} 
          placeholder="Search Food"
          aria-label="Search Food"
          aria-describedby="basic-addon2"
        />
        <Button style={{display:{search_display}}} variant="outline-secondary" id="button-addon2">
        <FaSearch />
        </Button>
      </InputGroup>
      </div>  
                                <div className="row row-cols-1 margin-edit row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-4 ">
                                    {cardData.map((card, index) => {
                                if(card.title.toLowerCase().includes(filter_items.toLowerCase()))      return  (<div className="col col-pad " key={index}>
                                            <div style={{minHeight:"400px"}} className="card small-card h-auto shadow-lg">
                                                <div className='img-div-edit'>
                                                    <img src={card.image} className="card-img-top" alt={card.title} />
                                                </div>
                                                <div className="card-body vertical-align">
                                                    <div >
                                                        <h5 className="card-title mb-2 ">{card.title}</h5>
                                                        <div className="d-flex align-items-center my-1 price-rating">
                                                            <p className='fw-bold p-0 m-0'>₹ {card.price}</p>
                                                            <div className='d-flex ms-3'>
                                                                    {[...Array(5)].map((star, i) => (
                                                                        <FaStar
                                                                            key={i}
                                                                            color={i < card.rating ? '#ffc107' : '#e4e5e9'}
                                                                        />
                                                                    ))}
                                                            </div>
                                                        </div>
                                                        <p className="card-text">
                                                            {card.shortDescription}
                                                            {isExpanded[index] && <span className="read-more">{card.fullDescription}</span>}
                                                            <button className="read-more-label ms-1 btn btn-link" onClick={() => toggleReadMore(index)}>
                                                                {isExpanded[index] ? 'Read Less' : 'Read More'}
                                                            </button>
                                                        </p>
                                                    </div>
                                                    <div>
                                                        {!addToCart[index]&&<button  onClick={()=>{dispatch(actionCreators.depositMoney(cardData[index]));setCardAlert(true);setItems(items+1);hide_add(index);}} style={{display:`${color}`}} type="radio" className="btn btn-success  btn-for-small">Add <span className='atc-hide' >to Cart</span> </button>}
                                                        {addToCart[index]&&<div style={{width:"max-content"}} className='quantity quantity2'><Button variant="light" className='items_quantity_button' >-</Button>
                            <span style={{marginLeft:"20px",backgroundColor:"white"}} className='hotel_cart_input' type="text" id="quantity"  >1</span>
                            <Button  variant="light" style={{marginLeft:"20px"}} className='items_quantiy_button card_button2' >+</Button></div>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    
                                    )})}
                                    {/* Add more cards if needed */}
                                </div>
                            </div>
                            {/* ----------------Tab-2-------------------------------------------- */}
                            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                                <div className="row row-cols-1 margin-edit row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-4 ">
                                    {cardData.map((card, index) => (
                                        <div className="col col-pad " key={index}>
                                            <div style={{minHeight:"400px"}} className="card small-card h-auto shadow-lg">
                                                <div className='img-div-edit'>
                                                    <img src={card.image} className="card-img-top" alt={card.title} />
                                                </div>
                                                <div className="card-body vertical-align">
                                                    <div >
                                                        <h5 className="card-title mb-2 ">{card.title}</h5>
                                                        <div className="d-flex align-items-center my-1 price-rating">
                                                            <p className='fw-bold p-0 m-0'>₹ {card.price}</p>
                                                            <div className='d-flex ms-3'>
                                                                    {[...Array(5)].map((star, i) => (
                                                                        <FaStar
                                                                            key={i}
                                                                            color={i < card.rating ? '#ffc107' : '#e4e5e9'}
                                                                        />
                                                                    ))}
                                                            </div>
                                                        </div>
                                                        <p className="card-text">
                                                            {card.shortDescription}
                                                            {isExpanded[index] && <span className="read-more">{card.fullDescription}</span>}
                                                            <button  className="read-more-label ms-1 btn btn-link" onClick={() => toggleReadMore(index)}>
                                                                {isExpanded[index] ? 'Read Less' : 'Read More'}
                                                            </button>
                                                        </p>
                                                    </div>
                                                    <div>       
                                                    {!addToCart[index+initialState.length]&&<button  onClick={()=>{dispatch(actionCreators.depositMoney(cardData[index]));setCardAlert(true);setItems(items+1);hide_add(index+initialState.length);}} style={{display:`${color}`}} type="radio" className="btn btn-success  btn-for-small">Add <span className='atc-hide' >to Cart</span> </button>}
                                                        {addToCart[index+initialState.length]&&<div style={{width:"max-content"}} className='quantity quantity2'><Button variant="light" className='items_quantity_button' >-</Button>
                            <span style={{marginLeft:"20px",backgroundColor:"white"}} className='hotel_cart_input' type="text" id="quantity"  >1</span>
                            <Button  variant="light" style={{marginLeft:"20px"}} className='items_quantiy_button card_button2' >+</Button></div>}
                                                                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    {/* Add more cards if needed */}
                                </div>
                            </div>
                            {/* ----------------Tab-3-------------------------------------------- */}
                            <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
                                <div className="row row-cols-1 margin-edit row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-4 ">
                                    {cardData.map((card, index) => (
                                        <div className="col col-pad " key={index}>
                                            <div style={{minHeight:"400px"}} className="card small-card h-auto shadow-lg">
                                                <div className='img-div-edit'>
                                                    <img src={card.image} className="card-img-top" alt={card.title} />
                                                </div>
                                                <div className="card-body vertical-align">
                                                    <div >
                                                        <h5 className="card-title mb-2 ">{card.title}</h5>
                                                        <div className="d-flex align-items-center my-1 price-rating">
                                                            <p className='fw-bold p-0 m-0'>₹ {card.price}</p>
                                                            <div className='d-flex ms-3'>
                                                                    {[...Array(5)].map((star, i) => (
                                                                        <FaStar
                                                                            key={i}
                                                                            color={i < card.rating ? '#ffc107' : '#e4e5e9'}
                                                                        />
                                                                    ))}
                                                            </div>
                                                        </div>
                                                        <p className="card-text">
                                                            {card.shortDescription}
                                                            {isExpanded[index] && <span className="read-more">{card.fullDescription}</span>}
                                                            <button className="read-more-label ms-1 btn btn-link" onClick={() => toggleReadMore(index)}>
                                                                {isExpanded[index] ? 'Read Less' : 'Read More'}
                                                            </button>
                                                        </p>
                                                    </div>
                                                    <div>
                                                    {!addToCart[index+(initialState.length*2)]&&<button  onClick={()=>{dispatch(actionCreators.depositMoney(cardData[index]));setCardAlert(true);setItems(items+1);hide_add(index+(initialState.length*2));}} style={{display:`${color}`}} type="radio" className="btn btn-success  btn-for-small">Add <span className='atc-hide' >to Cart</span> </button>}
                                                        {addToCart[index+(initialState.length*2)]&&<div style={{width:"max-content"}} className='quantity quantity2'><Button variant="light" className='items_quantity_button' >-</Button>
                            <span style={{marginLeft:"20px",backgroundColor:"white"}} className='hotel_cart_input' type="text" id="quantity"  >1</span>
                            <Button  variant="light" style={{marginLeft:"20px"}} className='items_quantiy_button card_button2' >+</Button></div>}                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    {/* Add more cards if needed */}
                                </div>
                            </div>
                            {/* ----------------Tab-4-------------------------------------------- */}
                            <div class="tab-pane fade" id="pills-contact1" role="tabpanel" aria-labelledby="pills-contact-tab1" tabindex="0">
                                <div className="row row-cols-1 margin-edit row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-4 ">
                                    {cardData.map((card, index) => {
                                       if(index==8||index==9) return (
                                            <div className="col col-pad " key={index}>
                                                <div style={{minHeight:"400px"}} className="card small-card h-auto shadow-lg">
                                                    <div className='img-div-edit'>
                                                        <img src={card.image} className="card-img-top" alt={card.title} />
                                                    </div>
                                                    <div className="card-body vertical-align">
                                                        <div >{/*this is a map*/}
                                                            <h5 className="card-title mb-2 ">{card.title}</h5>
                                                            <div className="d-flex align-items-center my-1 price-rating">
                                                                <p className='fw-bold p-0 m-0'>₹ {card.price}</p>
                                                                <div className='d-flex ms-3'>
                                                                        {[...Array(5)].map((star, i) => (
                                                                            <FaStar
                                                                                key={i}
                                                                                color={i < card.rating ? '#ffc107' : '#e4e5e9'}
                                                                            />
                                                                        ))}
                                                                </div>
                                                            </div>
                                                            <p className="card-text">
                                                                {card.shortDescription}
                                                                {isExpanded[index] && <span className="read-more">{card.fullDescription}</span>}
                                                                <button className="read-more-label ms-1 btn btn-link" onClick={() => toggleReadMore(index)}>
                                                                    {isExpanded[index] ? 'Read Less' : 'Read More'}
                                                                </button>
                                                            </p>
                                                        </div>
                                                        <div>
                                                        {!addToCart[index+(initialState.length*3)]&&<button  onClick={()=>{dispatch(actionCreators.depositMoney(cardData[index]));setCardAlert(true);setItems(items+1);hide_add(index+(initialState.length*3));}} style={{display:`${color}`}} type="radio" className="btn btn-success  btn-for-small">Add <span className='atc-hide' >to Cart</span> </button>}
                                                            {addToCart[index+(initialState.length*3)]&&<div style={{width:"max-content"}} className='quantity quantity2'><Button variant="light" className='items_quantity_button' >-</Button>
                                <span style={{marginLeft:"20px",backgroundColor:"white"}} className='hotel_cart_input' type="text" id="quantity"  >1</span>
                                <Button  variant="light" style={{marginLeft:"20px"}} className='items_quantiy_button card_button2' >+</Button></div>}                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                    {/* Add more cards if needed */}
                                </div>
                            </div>
                            {/* ----------------Tab-5-------------------------------------------- */}
                            <div class="tab-pane fade" id="pills-contact2" role="tabpanel" aria-labelledby="pills-contact-tab2" tabindex="0">
                                <div className="row row-cols-1 margin-edit row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-4 ">
                                    {cardData.map((card, index) => (
                                        <div className="col col-pad " key={index}>
                                            <div style={{minHeight:"400px"}} className="card small-card h-auto shadow-lg">
                                                <div className='img-div-edit'>
                                                    <img src={card.image} className="card-img-top" alt={card.title} />
                                                </div>
                                                <div className="card-body vertical-align">
                                                    <div >
                                                        <h5 className="card-title mb-2 ">{card.title}</h5>
                                                        <div className="d-flex align-items-center my-1 price-rating">
                                                            <p className='fw-bold p-0 m-0'>₹ {card.price}</p>
                                                            <div className='d-flex ms-3'>
                                                                    {[...Array(5)].map((star, i) => (
                                                                        <FaStar
                                                                            key={i}
                                                                            color={i < card.rating ? '#ffc107' : '#e4e5e9'}
                                                                        />
                                                                    ))}
                                                            </div>
                                                        </div>
                                                        <p className="card-text">
                                                            {card.shortDescription}
                                                            {isExpanded[index] && <span className="read-more">{card.fullDescription}</span>}
                                                            <button className="read-more-label ms-1 btn btn-link" onClick={() => toggleReadMore(index)}>
                                                                {isExpanded[index] ? 'Read Less' : 'Read More'}
                                                            </button>
                                                        </p>
                                                    </div>
                                                    <div>
                                                    {!addToCart[index+(initialState.length*3)]&&<button  onClick={()=>{dispatch(actionCreators.depositMoney(cardData[index]));setCardAlert(true);setItems(items+1);hide_add(index+(initialState.length*3));}} style={{display:`${color}`}} type="radio" className="btn btn-success  btn-for-small">Add <span className='atc-hide' >to Cart</span> </button>}
                                                        {addToCart[index+(initialState.length*3)]&&<div style={{width:"max-content"}} className='quantity quantity2'><Button variant="light" className='items_quantity_button' >-</Button>
                            <span style={{marginLeft:"20px",backgroundColor:"white"}} className='hotel_cart_input' type="text" id="quantity"  >1</span>
                            <Button  variant="light" style={{marginLeft:"20px"}} className='items_quantiy_button card_button2' >+</Button></div>} 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    {/* Add more cards if needed */}
                                </div>
                            </div>
                            {/* ----------------Tab-6-------------------------------------------- */}
                            <div class="tab-pane fade" id="pills-contact3" role="tabpanel" aria-labelledby="pills-contact-tab3" tabindex="0">
                                <div className="row row-cols-1 margin-edit row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-4 ">
                                    {cardData.map((card, index) => (
                                        <div className="col col-pad " key={index}>
                                            <div style={{minHeight:"400px"}} className="card small-card h-auto shadow-lg">
                                                <div className='img-div-edit'>
                                                    <img src={card.image} className="card-img-top" alt={card.title} />
                                                </div>
                                                <div className="card-body vertical-align">
                                                    <div >
                                                        <h5 className="card-title mb-2 ">{card.title}</h5>
                                                        <div className="d-flex align-items-center my-1 price-rating">
                                                            <p className='fw-bold p-0 m-0'>₹ {card.price}</p>
                                                            <div className='d-flex ms-3'>
                                                                    {[...Array(5)].map((star, i) => (
                                                                        <FaStar
                                                                            key={i}
                                                                            color={i < card.rating ? '#ffc107' : '#e4e5e9'}
                                                                        />
                                                                    ))}
                                                            </div>
                                                        </div>
                                                        <p className="card-text">
                                                            {card.shortDescription}
                                                            {isExpanded[index] && <span className="read-more">{card.fullDescription}</span>}
                                                            <button className="read-more-label ms-1 btn btn-link" onClick={() => toggleReadMore(index)}>
                                                                {isExpanded[index] ? 'Read Less' : 'Read More'}
                                                            </button>
                                                        </p>
                                                    </div>
                                                    <div>
                                                    {!addToCart[index+(initialState.length*4)]&&<button  onClick={()=>{dispatch(actionCreators.depositMoney(cardData[index]));setCardAlert(true);setItems(items+1);hide_add(index+(initialState.length*4));}} style={{display:`${color}`}} type="radio" className="btn btn-success  btn-for-small">Add <span className='atc-hide' >to Cart</span> </button>}
                                                        {addToCart[index+(initialState.length*4)]&&<div style={{width:"max-content"}} className='quantity quantity2'><Button variant="light" className='items_quantity_button' >-</Button>
                            <span style={{marginLeft:"20px",backgroundColor:"white"}} className='hotel_cart_input' type="text" id="quantity"  >1</span>
                            <Button  variant="light" style={{marginLeft:"20px"}} className='items_quantiy_button card_button2' >+</Button></div>}                                                     </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    {/* Add more cards if needed */}
                                </div>
                            </div>
                            {/* ----------------Tab-7-------------------------------------------- */}
                            <div class="tab-pane fade" id="pills-contact4" role="tabpanel" aria-labelledby="pills-contact-tab4" tabindex="0">
                                <div className="row row-cols-1 margin-edit row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-4 ">
                                    {cardData.map((card, index) => {
                                       if(index==10||index==11) return(
                                            <div className="col col-pad " key={index}>
                                                <div style={{minHeight:"400px"}} className="card small-card h-auto shadow-lg">
                                                    <div className='img-div-edit'>
                                                        <img src={card.image} className="card-img-top" alt={card.title} />
                                                    </div>
                                                    <div className="card-body vertical-align">
                                                        <div >
                                                            <h5 className="card-title mb-2 ">{card.title}</h5>
                                                            <div className="d-flex align-items-center my-1 price-rating">
                                                                <p className='fw-bold p-0 m-0'>₹ {card.price}</p>
                                                                <div className='d-flex ms-3'>
                                                                        {[...Array(5)].map((star, i) => (
                                                                            <FaStar
                                                                                key={i}
                                                                                color={i < card.rating ? '#ffc107' : '#e4e5e9'}
                                                                            />
                                                                        ))}
                                                                </div>
                                                            </div>
                                                            <p className="card-text">
                                                                {card.shortDescription}
                                                                {isExpanded[index] && <span className="read-more">{card.fullDescription}</span>}
                                                                <button className="read-more-label ms-1 btn btn-link" onClick={() => toggleReadMore(index)}>
                                                                    {isExpanded[index] ? 'Read Less' : 'Read More'}
                                                                </button>
                                                            </p>
                                                        </div>
                                                        <div>
                                                        {!addToCart[index+(initialState.length*5)]&&<button  onClick={()=>{dispatch(actionCreators.depositMoney(cardData[index]));setCardAlert(true);setItems(items+1);hide_add(index+(initialState.length*5));}} style={{display:`${color}`}} type="radio" className="btn btn-success  btn-for-small">Add <span className='atc-hide' >to Cart</span> </button>}
                                                            {addToCart[index+(initialState.length*5)]&&<div style={{width:"max-content"}} className='quantity quantity2'><Button variant="light" className='items_quantity_button' >-</Button>
                                <span style={{marginLeft:"20px",backgroundColor:"white"}} className='hotel_cart_input' type="text" id="quantity"  >1</span>
                                <Button  variant="light" style={{marginLeft:"20px"}} className='items_quantiy_button card_button2' >+</Button></div>}                                                     </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                    {/* Add more cards if needed */}
                                </div>
                            </div>
                            {/* ----------------Tab-8-------------------------------------------- */}
                            <div class="tab-pane fade" id="pills-contact5" role="tabpanel" aria-labelledby="pills-contact-tab5" tabindex="0">
                                <div className="row row-cols-1 margin-edit row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-4 ">
                                    {cardData.map((card, index) => {
                                      if(index==2)  return(
                                            <div className="col col-pad " key={index}>
                                                <div style={{minHeight:"400px"}} className="card small-card h-auto shadow-lg">
                                                    <div className='img-div-edit'>
                                                        <img src={card.image} className="card-img-top" alt={card.title} />
                                                    </div>
                                                    <div className="card-body vertical-align">
                                                        <div >
                                                            <h5 className="card-title mb-2 ">{card.title}</h5>
                                                            <div className="d-flex align-items-center my-1 price-rating">
                                                                <p className='fw-bold p-0 m-0'>₹ {card.price}</p>
                                                                <div className='d-flex ms-3'>
                                                                        {[...Array(5)].map((star, i) => (
                                                                            <FaStar
                                                                                key={i}
                                                                                color={i < card.rating ? '#ffc107' : '#e4e5e9'}
                                                                            />
                                                                        ))}
                                                                </div>
                                                            </div>
                                                            <p className="card-text">
                                                                {card.shortDescription}
                                                                {isExpanded[index] && <span className="read-more">{card.fullDescription}</span>}
                                                                <button className="read-more-label ms-1 btn btn-link" onClick={() => toggleReadMore(index)}>
                                                                    {isExpanded[index] ? 'Read Less' : 'Read More'}
                                                                </button>
                                                            </p>
                                                        </div>
                                                        <div>
                                                        {!addToCart[index+(initialState.length*6)]&&<button  onClick={()=>{dispatch(actionCreators.depositMoney(cardData[index]));setCardAlert(true);setItems(items+1);hide_add(index+(initialState.length*6));}} style={{display:`${color}`}} type="radio" className="btn btn-success  btn-for-small">Add <span className='atc-hide' >to Cart</span> </button>}
                                                            {addToCart[index+(initialState.length*6)]&&<div style={{width:"max-content"}} className='quantity quantity2'><Button variant="light" className='items_quantity_button' >-</Button>
                                <span style={{marginLeft:"20px",backgroundColor:"white"}} className='hotel_cart_input' type="text" id="quantity"  >1</span>
                                <Button  variant="light" style={{marginLeft:"20px"}} className='items_quantiy_button card_button2' >+</Button></div>}                                                     </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                    {/* Add more cards if needed */}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div>
                        <h1 className='text-center my-3 mt-5 ' >Our Stories</h1>
                        <CustomCarousel/>
                    </div> */}
                </div>
            </div>
            
            <div className="model-main-div">
            <Link to="/Cart"><Model/></Link> 
               {cardALert&&(<div className='cart_alert'>
               -{items} Selected-
                </div>)}
            </div>
            <div style={{display:search_display}} className='cards_footer'>
          <Footer/>
          </div>
        </div>
       
    );
};

export default Cards;
