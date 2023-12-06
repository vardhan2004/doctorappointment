import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "../styles/docform.css" 
const Addproduct = () => {
    const [doctorData,setDoctorData] = useState({
        'title':"",
        'name':"",
        'specialization':"",
        'doctorimg':"",
    });
    let backendapi = 'http://localhost:5000/addDoctorData';
    const handleSubmit = (e) => {
        const Inputfields = new FormData()
        Inputfields.append('myfil',doctorData.doctorimg)
        Inputfields.append('title',doctorData.title)
        Inputfields.append('name',doctorData.name)
        Inputfields.append('specialization',doctorData.specialization)
        
        e.preventDefault();
        axios.post(backendapi,Inputfields).then((res)=>{
            console.log(res)
            if(res.status === 200){
                alert("success")
                window.location.href = "/login"
            }
        })
    }
    return(
        <div clasName="container-fluid hei">
            <div className="form-container a">
            <h1>Doctor Details</h1>
            <form onSubmit={handleSubmit} action="post" className="card p-4 c"> 
                <h6>Type of Disease:</h6>
                <input type = "text" name = "title" value = {doctorData.title} onChange={(e)=>setDoctorData({...doctorData,title:e.target.value})}/>
                <br /><br />
                <h6>Name:</h6>
                <input type = "text" name = "name" value = {doctorData.name} onChange={(e)=>setDoctorData({...doctorData,name:e.target.value})} />
                <br /><br />
                <h6>specialization: </h6>
                <input type = "text" name = "specialization" value = {doctorData.specialization} onChange={(e)=>setDoctorData({...doctorData,specialization:e.target.value})} />
                <br /><br />
                <h6>Upload Image: </h6>
                <input type="file" name = "doctorimg" onChange={(e)=>setDoctorData({...doctorData,doctorimg:e.target.files[0]})} />
                <br /><br />
                <input type="submit" value= "submit" />
            </form>
            </div>
        </div>
            
            

    )
}
        
export default Addproduct           