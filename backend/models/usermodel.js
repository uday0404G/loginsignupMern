const { default: mongoose } = require("mongoose");



const usermodel=mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const userModel=mongoose.model("users",usermodel)
module.exports=userModel