const express=require("express")

const userRoute=express.Router()

const { Reg, Login } = require("../controllers/userController")


userRoute.post("/reg",Reg)


userRoute.post('/login',Login)


module.exports=userRoute
