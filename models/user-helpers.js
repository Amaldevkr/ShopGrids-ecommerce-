const mongoose=require('mongoose')

const userScema= new mongoose.Schema({
  name:{
    type:String,
    required:[true,'name is required'],
    minlenth:[3,'name can\'t be smaller than 3 character'],
    
    maxlenth:[64,'name can\'t be grater than 64 character'],

  },

  email:{
    type:String,
    required:[true,'name is required'],
    maxlenth:[128,'Email can\'t be grater than 128 character'],
    index:true
      
  },
  phone:{
    type:String,
    required:[true,'phone is required'],
    maxlenth:[12,'phonenumber can\'t be grater than 12 character'],
    index:true
      
  },
 
  password:{

    type:String,
    required:[true,'password is required'],
  },
 
  isActive:{
    type:Boolean,
    default:true 
  },
  isDeleted:{
  type:Boolean,
  default:false 
  },
  timestamp:true

})
const User =mongoose.model('user',userScema)

module.exports=User
