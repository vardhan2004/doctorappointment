import mongoose from "mongoose";
const Schema = mongoose.Schema
const product = new Schema({
    title:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    specialization:{
        type:String,
        required:true
    },
    doctorimg:{
        type:String,
        required:true
    }
})
export default mongoose.model('services',product)