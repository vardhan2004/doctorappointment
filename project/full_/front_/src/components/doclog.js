import React, { useEffect, useState } from "react";
import axios from "axios";

const Doclog = () => {
  const [dat, setDat] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(!localStorage.getItem("User")){
      // alert("Login First")
      window.location.href = "/login";
    }
    axios.get("http://localhost:5000/appointget")
      .then((response) => {
        setDat(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);  
      });
  });

  const Approve =(data) =>{
    // document.getElementById('dani').innerHTML = "Approved"
    //e.preventDefault()
    console.log(data)
    axios.post("http://localhost:5000/approve",data)
    .then(res=>{
      axios.delete('http://localhost:5000/deleteapprove/'+data._id).then(
        alert("data deleted Successfully")
      )})
        .catch(err=>{console.log(err)})
    }
  const reject = (data) =>{
    console.log(data)
    axios.post("http://localhost:5000/reject",data)
    .then(res=>{
      axios.delete('http://localhost:5000/deletereject/'+data._id).then(
        alert('data rejected')
      )
    })
    .catch(err=>{console.log(err)})
  }

  return (
    <div>
      <div>
        <h4>
          {
            localStorage.getItem("User")
          }
        </h4>
        <h2 className="he">Appointment Requests</h2>
      
        {loading ? (
          <p>Loading data...</p>
        ) : (
          <table className="table" border={1}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Mobile Number</th>
                <th>Mail Id</th>
                <th colSpan={2}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {dat.map((ele, index) => (
                <tr key={index}>
                  <td>{ele.name}</td>
                  <td>{ele.mobile}</td>
                  <td>{ele.email}</td>
                  <td>
                    <button className="btn btn-success"  onClick={()=>Approve(ele)}>APPROVE</button>
                  </td>
                  <td>
                    <button className="btn btn-danger" onClick={()=>reject(ele)} >REJECT</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
  }
  export default Doclog;