import { Link } from "react-router-dom"
import "../styles/menustyles.css"
import Contact from "./contact"
import { useEffect, useState } from "react"
const Menu = () =>{
   const [sty, setSty] = useState(true)
   useEffect(()=>{
        console.log(sty)
        if(localStorage.getItem("User")){
            setSty(false)
        }
        
   }, [])
   const logout = () =>{
        localStorage.removeItem("User")
        window.location.href = "/Login"
   }
    return(
        <div>
                    <div>
                        <div className="navbar navbar-expand-lg">
                            <Link to = "/" className="li">Home</Link>
                            <Link to = "/Doctornew" className="li">About</Link>
                            <Link to = "/services" className="li">Services</Link>
                            {/* <Link to = "/contact" className="li">Contact</Link> */}
                            {
                                sty?<Link to = '/Login' className="li">< button className="btn btn-danger">Doctor's Login</button></Link>:< button className="btn btn-danger li" onClick={logout}>Logout</button>
                            }
                        </div>
                            
                    </div>
                   
                    
    
             
           
            
        </div>
    )
}
export default Menu