const express= require("express")
const app= express()
const cors=require("cors")
const connect = require("./server/server")
const userRoute = require("./Routes/userRouter")
require('dotenv').config()
const cookie=require('cookie-parser');
app.use(express.json())
app.use(cors())
app.use(cookie())
app.use("/user",userRoute)

app.listen(process.env.PORT,()=>{
    connect()
    console.log(`server is running on ${process.env.PORT}`)
})