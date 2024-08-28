import React from 'react'
import logo from '../assets/imgs/logo.png'
import { BrowserRouter as Router, Routes, Route ,Link} from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Routing from './Routing';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                <div class="container-fluid">
                    <a  class="navbar-brand" href="#"><img style={{width:"60px"}} src={logo} alt="" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <Link to="/Routing">
                            <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            </Link>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                            {/* <Link to="/Cart">
                            <li class="nav-item shop-icon">
                            <FaShoppingCart className='shop-icon' />
                             </li>
                             </Link>  */}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar