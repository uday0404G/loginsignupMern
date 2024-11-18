const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const userModel = require("../models/usermodel")

const Reg=async(req,res)=>{
    try {
      const {name,email,password}=req.body
      const data = await userModel.findOne({email:email})
      if(data)return res.send({err:"User Alrady Registerd"})
      
      bcrypt.hash(password,10,async(err,hash)=>{
          if(err)return res.status(500).send({err:"Error in Hashing password"})
        const usercreate=  await userModel.create({...req.body,password:hash})
          let token=jwt.sign({email:email,id:usercreate._id},"shh")
          res.cookie("token",token)
          res.status(200).send({msg:"User Created Successfully"})
      })
    } catch (error) {
      console.error(error);
      res.status(500).send({ err: "An error occurred during registration" });
    }  
}

const Login=async(req,res)=>{
  try {
      let {email,password}=req.body
      const data = await userModel.findOne({email})
      if(!data) return res.send({err:"USER NOT REGISTERD"})
      
      bcrypt.compare(password,data.password,async(err,result)=>{
          if(result){
              const token=jwt.sign({email:email,id:data._id},"shh")
              res.cookie("token",token)
              res.status(200).send({msg:"User Login succesfull"})
          }else return res.send({err:"PASSWORD DOSE NOT MATCH"})
      })
      
  } catch (error) {
      console.error(error);
      res.status(500).send({err:"user Login error"});
      
  }
}
module.exports={Reg,Login}