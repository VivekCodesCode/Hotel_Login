import React, { useState, useEffect } from 'react';
import "../CSS/Tables.css"
import Navbar from './Navbar';
import { useDispatch } from "react-redux";
import Button from 'react-bootstrap/Button';
import { bindActionCreators } from "redux";
import { actionCreators ,} from "../State/index";
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
const Tables = () => {
  const [arr, newarr] = useState([])
  const [show, setShow] = useState(false);
  const[load_display,set_load_display]=useState("block");
  const [id, new_id] = useState("");
  const[tnumber,newTNumber]=useState(0);
  const [color, setcolor] = useState("green")
  let navigate = useNavigate();
  const dispatch=useDispatch();
  const hotel_id = useSelector((state) => state.amount.thirdArray);
  console.log("Hotel id is-->"+hotel_id);
  const handleClose = () => {
    setShow(false);
  }
  function check_color(status) {
    if (!status == true) {
      return "linear-gradient(180deg, #1E6620, #a1a2a1)";
    }
    return "linear-gradient(180deg, #FF0000, #E68F8F)"
  }
  const handleClose2 = () => {
    setShow(false);
    console.log("id is-->" + id);
    axios.post(`https://hotelloginbackend.onrender.com/api3/bookTable/${id}`);
    dispatch(actionCreators.joinData(tnumber));
    navigate("/Routing");
  }
  const handleShow = (number) => {setShow(true);newTNumber(number)};
  function delete_table(id) {
      
  }
  return (
    <>
     
      <Modal className='table_popup' show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Welcome!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to Book  table {tnumber} ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose2}>
            Book Table
          </Button>
        </Modal.Footer>
      </Modal>
      {
        useEffect(() => {
          axios.get("https://hotelloginbackend.onrender.com/api3/getTable").then((res) => {
            console.log(res.data);
            set_load_display("none")
            let temp = res.data.TableData.map((val, i, arr) => {
              return (
                <div onClick={async() => {let check1= await axios.get("https://hotelloginbackend.onrender.com/api3/getTable").then((res)=>{ return res.data.TableData[i].status});if (!check1) { new_id(val._id); handleShow(val.tableNumber) }; console.log(check1) }} className="table" id="table-08">
                  <div style={{ background: check_color(val.status) }} className="seat green"></div>
                  <div style={{ background: check_color(val.status) }} className="seat green"></div>
                  <div style={{ background: check_color(val.status) }} className="seat green"></div>
                  <div style={{ background: check_color(val.status) }} className="seat green"></div>
                  <div className="label">{val.tableNumber}</div>
                </div>
              );
            })
            newarr(temp);
          }).catch((err)=>{console.log("Error is-->"+err);});
        }, [])
      }

      <div className='table_wrapper'>
      <div className='table_description'>
    <div style={{background:"linear-gradient(180deg, #1E6620, #a1a2a1)"}}  className="seat tableava green"></div><span className='color_val' style={{color:"white"}}>Available</span><br/><br/><br/>
    <div style={{background:"linear-gradient(180deg, #FF0000, #E68F8F)"}}  className="seat tableres green"></div><span className='color_val' style={{color:"white"}}>Booked</span>
    </div>
    <div className="loader" style={{display:load_display}}>  </div>
        <div className="layout">
        
          {arr}  
        </div>
      </div>
      
    </>

  );
};

export default Tables;
