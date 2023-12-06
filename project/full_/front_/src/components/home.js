import { Link } from "react-router-dom";
import "../styles/home.css";
import Doctornew from "./doctornew.js";
import Services from "./services";
import Footer from "./footer";
import { useState, useEffect } from "react";
import axios from "axios";
const Home = () => {
  const [cnt, setCnt] = useState(0)
  useEffect(()=>{
    axios.get("http://localhost:5000/doctorcnt")
    .then(res =>{
      console.log(res.data.length)
      setCnt(res.data.length)
    })
  
  })
  return (
    <div>
        <h5>Doctors Availabel :{cnt - 1}</h5>
      <div className="container-fluid homepage">
    
        <div className="row justify-content-center">
          <div className="col-sm-12 col-lg-6 text-center">
            
            <h1 className="hd">Welcome to Our Website</h1>
          
            <Link to="/book" className="btn btn-primary ">
              Book Your Appointment
            </Link>
          </div>
        </div>
      </div>
    <br />
    <div>
        <Doctornew />
    </div>
    <br />
    <div>
        <Services />
    </div>
    <br />
    <div>
        <Footer />
    </div>
    </div>
  );
};

export default Home;
