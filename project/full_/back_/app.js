import express, { response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import multer from "multer";
const app = express();
import appointments from "./models/appointments.js";
import doctors from "./models/doctors.js ";
import nodemailer from 'nodemailer';
import product from "./models/doctor_product.js"
app.use('/images',express.static('public/images'))
app.use(cors());
app.use(bodyParser.json())
app.use(express.json())
mongoose.connect("mongodb+srv://21a91a04b5:GJ5SZ69UxvFMfBEN@cluster0.50cfwsx.mongodb.net/Cluster0?retryWrites=true&w=majority")
.then(()=> app.listen(5000))
.then(()=>
    console.log("Connected Successfully to database")
)
.catch((err)=> console.log(err))
app.post("/appointdoc", (req, res, next)=>{
    const {name, email, mobile} = req.body.formdat;
    console.log(req.body.formdat)
    let appdata = new appointments({
        name,
        email,
        mobile
    })
    appdata.save()
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'jopulapalli@gmail.com',
          pass: 'cvng umxw jglh gmjp'
        }
      });
      
      var mailOptions = {
        from: 'jopulapalli@gmail.com',
        to: email,
        subject: 'Sending Email using Node.js',
        text: 'successfully log in ',
        // html: `<div><img src = "cid:myImg" style="width:200px;height:200px;"/><p></p></div>`,
        // attachments: [{
        //       filename: profile,
        //       path:req.file.path,
        //       cid: 'myImg'
        //   }]
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    return res.status(200).json({msg:"Successfull"})
})
app.get('/appointget', async(req, res, next)=>{
    let appointdata
    try{
        appointdata = await appointments.find();
    }
    catch(err){
        console.log("No Data")
    }
    return res.status(200).json(appointdata)
})

// Backend code for Login Page
app.post('/getuser', async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const doctorexist = await doctors.findOne({ email: email });
        if (!doctorexist) {
            // console.log(userexist.password, req.body.password);
            return res.status(200).json({msg: "The Entered Details Not Found"})
        } 
        else {
            if (doctorexist.password === req.body.password){
                return res.status(200).json({msg: "Login Successful", doctorexist})
            }
            else{
                return res.status(200).json({msg: "Invalid Email or Password"})
            }
        }
    } catch (err) {
        console.log(err);
        return res.send({msg:"Error"});
    }
});

//Approve
app.post('/approve',async(req,res,next)=>{
    const {email} = req.body
    // console.log(req.body)
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'jopulapalli@gmail.com',
          pass: 'cvng umxw jglh gmjp'
        }
      });
      
      var mailOptions = {
        from: 'jopulapalli@gmail.com',
        to: email,
        subject: 'Sending Email using Node.js',
        text: 'Congratulations Your Appointment is Approved, Stay in contact ...!',
        
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      res.send('Sent');
})
//Approve Delete
app.delete('/deleteapprove/:id',async(req,res,next)=>{ 
    const _id= req.params.id;
    console.log(_id);
    let approved
      try{
          approved =await appointments.findByIdAndDelete(_id)
      }
      catch(err){
          console.log(err)
      }
      if(approved) console.log('Deleted');
      else console.log('Couldnt');
    })

//Reject
app.post('/reject',async(req,res,next)=>{
  const {email} = req.body
  // console.log(req.body)
  var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'jopulapalli@gmail.com',
        pass: 'cvng umxw jglh gmjp'
      }
    });
    
    var mailOptions = {
      from: 'jopulapalli@gmail.com',
      to: email,
      subject: 'Sending Email using Node.js',
      text: 'we are unable to accept your Appointment due to unavailability of doctor , Better luck for next time . kindly Appolizing for rejecting',
      
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    res.send('Sent');
})
//reject delete
app.delete('/deletereject/:id',async(req,res,next)=>{ 
  const _id = req.params.id;
  console.log(_id)
  let reject
  try{
      reject =await appointments.findByIdAndDelete(_id)
  }
  catch(err){
      console.log(err)
  }
  })
// Backend code for Register Page
app.post('/createuser', async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const doctoravailable = await doctors.findOne({ email: email });
        if (doctoravailable) {
            // console.log(userexist.password, req.body.password);
            return res.status(200).json({msg: "User Already Exists. Try with another email"})
        } 
        else {
            const {name, email, password} = req.body;
            const createdata = new doctors({
                name,
                email,
                password
            })
            createdata.save()
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: 'jopulapalli@gmail.com',
                  pass: 'cvng umxw jglh gmjp'
                }
              });
              
              var mailOptions = {
                from: 'jopulapalli@gmail.com',
                to: email,
                subject: 'Sending Email using Node.js',
                text: 'SuccessFully Registered',
                // html: `<div><img src = "cid:myImg" style="width:200px;height:200px;"/><p></p></div>`,
                // attachments: [{
                //       filename: profile,
                //       path:req.file.path,
                //       cid: 'myImg'
                //   }]
              };
              
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
            return res.status(200).json({msg:"Registered Successfully"})
        }
    } catch (err) {
        console.log(err);
        return res.send({msg:"Error"});
    }
});

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'public/images')
  },
  filename: function (req, file, callback) {
    // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    callback(null, Date.now()+"_"+file.originalname)
  }
})

const upload = multer({ storage: storage })
//add product 

app.post("/addDoctorData",upload.single("myfil"),async(req,res,next)=>{
  const doctorimg = (req.file) ? req.file.filename : null
  const {title,name,specialization}  = req.body
  console.log(doctorimg)
  const prod = new product({
    title,
    name,
    specialization,
    doctorimg
  })
  try{
    prod.save();
    return res.status(200).json({message:'details added to about page'})

  }
  catch(err){
    return res.status(400).json({meaasge:"not uploaded"})
  }
})
app.get('/doctorservices',async(req,res,next)=>{
  let productsdata; 
  try{
      productsdata=await product.find();
  }catch(err){
      console.log(err);
  }
  if(!productsdata){

      return res.status(404).json({message:"no Doctors found."})

  }
  return res.status(200).json(productsdata)
})
app.get('/doctorcnt', async(req, res)=>{
  let Count 
  try{
    Count = await doctors.find()
  }
  catch(err){
    console.log(err)
  }
  if(!Count){

    return res.status(404).json({message:"No Data found."})

}
  return res.status(200).json(Count)
})