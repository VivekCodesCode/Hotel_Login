import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Login.css"
import Box from '@mui/material/Box';
import "./App.css"
import TextField from '@mui/material/TextField';
import { useDispatch } from "react-redux";
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { actionCreators } from "./State/index";

function Login() {
  const[validate,newvalidate]=useState(true)
  const[buttons,newbuttons]=useState("Submit")
  const[name,setname]=useState("");
  const[hotel_ids,new_hotel_ids]=useState("")

  const[phone,setphone]=useState("");
  const[otp,newotp]=useState("")
  let navigate = useNavigate(); 
  const dispatch=useDispatch()

  function onchangeName(params) {
    setname(params.target.value);
    console.log(name);
  }
  function onchangeOtp(params) {
    newotp(params.target.value)
  }
  function get_hotel_id(params) {
    new_hotel_ids(params.target.value);
  }
  function onchangePhone(params) {
    setphone(params.target.value);
    console.log(phone);
  }
  function writeOtp(params) {
  //    newvalidate(false)
     
  //   console.log(name);
  //   console.log(phone)
  //   if(validate){axios.post("https://hotelloginbackend.onrender.com/signup",
  //    {
  //       "username":name,
  //       "phonenumber":"+91"+phone,
  //   }
  //   )}
    
  //  if(!validate){
  //   console.log(validate)
  //   console.log(otp)
  //   axios.post('https://hotelloginbackend.onrender.com/verify',{
  //      "phonenumber":"+91"+phone,
  //   "otp":otp,
  //   }).then((res)=>{
  //     if(res.data.success){
  //       navigate("/Tables");
  //     }
  //     else{
  //       alert("Wrong otp")
  //     }
  //   })
  //  }
  dispatch(actionCreators.hotel_id(hotel_ids));
  navigate("/Tables");

  }
  //This is a form
  return (
    <div className='login_wrapper'>
    <div className='login'>
      <h1 className='login_head'>Welome To Hotel</h1>
    <Form className='login_form col-md-12 align-items-center '>
      <Form.Group className="mb-3" controlId="formBasicEmail">``
      {validate && (<TextField
      onChange={onchangeName}
      id="standard-basic"
      label="Enter Name"
      variant="standard"
      InputLabelProps={{
        style: { color: 'white' },
      }}
      inputProps={{
        style: { color: 'white' },
      }}
      sx={{
        '& .MuiInput-underline:before': {
          borderBottomColor: 'white',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: 'white',
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
          borderBottomColor: 'white',
        },
        color: 'white',
      }}
    />)}
        <br/><br/>
        {validate&&(<TextField className='hotel_input_phone'
      onChange={onchangePhone}
      id="standard-basic"
      label="Enter Phone"
      variant="standard"
      InputLabelProps={{
        style: { color: 'white' },
      }}
      InputProps={{
        style: { color: 'white' },
      }}

      
      sx={{
        '& .MuiInput-underline:before': {
          borderBottomColor: 'white',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: 'white',
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
          borderBottomColor: 'white',
        },
        color: 'white',
      }}
    />)}
    {!validate&&(<TextField className='hotel_input_phone'
      id="standard-basic"
      label="Enter Your OTP"
      variant="standard"
      onChange={onchangeOtp}
      InputLabelProps={{
        style: { color: 'white' },
        
      }}
      InputProps={{
        style: { color: 'white' },
      }}
      sx={{
        '& .MuiInput-underline:before': {
          borderBottomColor: 'white',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: 'white',
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
          borderBottomColor: 'white',
        },
        color: 'white',
      }}
    />)}
    {validate&&(<TextField className='hotel_input_phone'
      onChange={get_hotel_id}
      id="standard-basic"
      label="Enter hotel_id"
      variant="standard"
      InputLabelProps={{
        style: { color: 'white' },
      }}
      InputProps={{
        style: { color: 'white' },
      }}

      
      sx={{
        '& .MuiInput-underline:before': {
          borderBottomColor: 'white',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: 'white',
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
          borderBottomColor: 'white',
        },
        color: 'white',
      }}
    />)}
    
      </Form.Group>
      <br/>
      <Button onClick={writeOtp} className='login_submit' variant="primary" type="button">
        {buttons}
      </Button>
    </Form>
    </div>
    </div>
  );
}

export default Login;