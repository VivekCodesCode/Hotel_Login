import React from 'react'
import '../Components/Cards.css'
// import { MdMenuBook } from "react-icons/md";
import { HiShoppingCart } from 'react-icons/hi';
import { BrowserRouter as Router, Routes, Route ,Link} from "react-router-dom";


const Model = () => {
    return (
        <div>
          
          <Link to="/Cart">
            {/* <!-- Button trigger modal --> */}
                <button type="button" style={{backgroundColor:'black !important'}} class="btn menu-btn" >
                    <p>View  Cart</p>
                    <i className='p-0' ><HiShoppingCart /></i>
                </button>
                </Link>
                {/* <!-- Modal -->  this is the model and the background is set to the normal color*/}
                {/* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content modal-body-edit">
                        <div class="modal-header bg-success ">
                            <h1 class="modal-title fs-5 text-white " id="exampleModalLabel">We are always here to serve you</h1>
                            <button type="button" class="btn-close bg-white " data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body  ">
                            <ul className='ps-1'  >
                                
                                <a href="#" className="li-anker d-flex pb-4 justify-content-between">
                                    <li className='menu-li-edit '>Veg Main Course</li>
                                    <span>5</span>
                                </a>

                                <a href="#" className="li-anker d-flex pb-4 justify-content-between">
                                    <li className='menu-li-edit '>
                                    South Indian</li>
                                    <span>5</span>
                                </a>

                                <a href="#" className="li-anker d-flex pb-4 justify-content-between">
                                    <li className='menu-li-edit '>Snacks</li>
                                    <span>5</span>
                                </a>

                                <a href="#" className="li-anker d-flex pb-4 justify-content-between">
                                    <li className='menu-li-edit '>Breads</li>
                                    <span>5</span>
                                </a>

                                <a href="#" className="li-anker d-flex pb-4 justify-content-between">
                                    <li className='menu-li-edit '>Salads
                                    </li>
                                    <span>5</span>
                                </a>

                                <a href="#" className="li-anker d-flex pb-4 justify-content-between">
                                    <li className='menu-li-edit '>
                                    Beverage</li>
                                    <span>5</span>
                                </a>

                                <a href="#" className="li-anker d-flex pb-4 justify-content-between">
                                    <li className='menu-li-edit '>Sweets</li>
                                    <span>5</span>
                                </a>

                                <a href="#" className="li-anker d-flex pb-4 justify-content-between">
                                    <li className='menu-li-edit '>Cold Drinks
                                    </li>
                                    <span>5</span>
                                </a>

                                
                                
                            </ul>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Model;