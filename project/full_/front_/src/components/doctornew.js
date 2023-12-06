import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import "../styles/about.css"
function Doctornew(){
    const [data,setData] = useState([])
    useEffect(()=>{
      axios.get('http://localhost:5000/doctorservices').then((res)=>{
        setData(res.data)
      })
    },[])
    return(
       <>
        <div className="products-list">
          {
              data.map((ele,i)=>{
                return(
                  <div className="card card2 p-4">
                    <h6 className="first">{ele.title}</h6>
                    <img src={`http://localhost:5000/images/${ele.doctorimg}`} alt="" />
                    <h6 className="second">{ele.name}</h6>
                    <h6 className="third">{ele.specialization}</h6>
                  </div>
                )
              })
            }
        </div>
       </>
    )
}
export default Doctornew