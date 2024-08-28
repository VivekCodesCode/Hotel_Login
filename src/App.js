import logo from './logo.svg';
import './App.css';
import Login from './Login';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar'
import Routing from './Components/Routing'
import Footer from './Components/Footer'
import Cards from './Components/Cards';
import Cart from './Components/Cart';
import Model from './Components/Model';
import Tables from './Components/Tables';
function App() {
  return (
  <>


      
      <div className='routing-tag-edit-css'  >
      <Router>    
  
    <Routes>
   <Route exact path='/' element={<Login/>}/>
   <Route exact path='/Cards' element={<Cards/>}/>
   <Route exact path='/Navbar' element={<Navbar/>}/>
   <Route exact path='/Routing' element={<Routing/>}/>
   <Route exact path='/Cart' element={<Cart/>}/>
   <Route exact path='/Model' element={<Model/>}/>
   <Route exact path='/Tables' element={<Tables/>}/>
    </Routes>
 
   
   </Router>

      </div>

      </>
  );
}

export default App;
