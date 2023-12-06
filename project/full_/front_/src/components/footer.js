import { Link } from "react-router-dom"
import "../styles/menustyles.css"

const Footer = () =>{
    return(
        <div>
            <div  style={{
                    minHeight: "400px",
                    color: "white",
                    borderTop:'15px solid white',
                    boxShadow:'2px 2px 2px white',
                    backgroundColor:"black"
                }}>
                <br/>
                <h3>Doctor appointment in Online</h3>
                <div>
                    <br/>
                    <div style={
                        {
                            float:'left',
                            marginLeft:'100px'
                        }
                    }>
                        
                        <Link to = "/about"  style={{color:'white',textAlign:'left'}}><p>About us</p></Link>
                        <Link to='/services' style={{color:'white',textAlign:'left'}}><p>Services</p></Link>
                        <Link to='/register' style={{color:'white',textAlign:'left'}}><p>Registration</p></Link>
                        <Link to='/'         style={{color:'white',textAlign:'left'}}><p>Privacy Policy</p></Link>
                        <Link to='/'         style={{color:'white',textAlign:'left'}}><p>Terms and Conditions</p></Link>
                    </div>
                    <div style={
                        {
                            float:'left',
                            marginLeft:'100px'
                        }
                    }>
                        <p style={{fontSize:'20px',textAlign:'left'}}>Services</p>
                        <p style={{fontSize:'15px',textAlign:'left'}}>Dental Care</p>
                        <p style={{fontSize:'15px',textAlign:'left'}}>Eye Care</p>
                        <p style={{fontSize:'15px',textAlign:'left'}}>Skin Care</p>
                        <p style={{fontSize:'15px',textAlign:'left'}}>Medicine</p>
                        <p style={{fontSize:'15px',textAlign:'left'}}>Adavanced Technology</p>
                        

                    </div>
                    <div style={
                        {
                            float:'left',
                            marginLeft:'50px'
                        }
                    }>
                        <p style={{fontSize:'20px',textAlign:'left'}}>Contact</p>
                        <p style={{fontSize:'12px',textAlign:'left'}}>+0884 234 5700</p>
                        <p style={{fontSize:'12px',textAlign:'left'}}>S.A.I. Hospitals Services</p>

                        <p style={{fontSize:'12px',textAlign:'left'}}>Rajahmundry, Andhra Pradesh - 533101</p>
                        
                        

                    </div>
                    <div style={
                        {
                            float:'left',
                            marginLeft:'100px'
                        }
                    }>
                        <p style={{fontSize:'20px',textAlign:'left'}}>Hospitals By City</p>
                        <p style={{fontSize:'12px',textAlign:'left'}}>Hospital in Mumbai</p>
                        <p style={{fontSize:'12px',textAlign:'left'}}>Hospital in Delhi</p>
                        <p style={{fontSize:'12px',textAlign:'left'}}>Hospital in Chennai</p>
                        <p style={{fontSize:'12px',textAlign:'left'}}>Hospital in Hyderabad</p>
                        <p style={{fontSize:'12px',textAlign:'left'}}>Hospital in Bnagalore</p>
                        

                    </div>
                    <div style={
                        {
                            float:'left',
                            marginLeft:'100px'
                        }
                    }>
                        <p style={{fontSize:'20px',textAlign:'left'}}>Doctors By Cities</p>
                        <p style={{fontSize:'12px',textAlign:'left'}}>Doctors in Mumbai</p>
                        <p style={{fontSize:'12px',textAlign:'left'}}>Doctors in Delhi</p>
                        <p style={{fontSize:'12px',textAlign:'left'}}>Doctors in Chennai</p>
                        <p style={{fontSize:'12px',textAlign:'left'}}>Doctors in Hyderabad</p>
                        <p style={{fontSize:'12px',textAlign:'left'}}>Doctors in Bnagalore</p>
                        

                    </div>
                    
                </div>
                
                <div style={{marginTop:'250px'}}>    
                    <p style={{}}>Disclaimer - The content on this site is for informational purposes only. Always seek the advice of a qualified physician.</p>
                    <p>CopyRight @ 2023 TechnicalHub.io</p>
                </div>
                    
            </div>
            
        </div>
    )
}
export default Footer