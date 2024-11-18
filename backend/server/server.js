const mongoose=require("mongoose")
require("dotenv").config();
const connect=async()=>{
    try {
          await mongoose.connect(process.env.DATABASE)
        console.log("Db connected");
        
    } catch (error) {
        console.log("Db not connected");
        
    }
}
module.exports = connect