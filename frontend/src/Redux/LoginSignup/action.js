import axios from "axios"
import { ERROR, LOADING, REGISTERSUCCESS } from "./Actiontype"
import {  toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const signupdata=(obj)=>(dispatch)=>{
    dispatch({type:LOADING})
    axios.post('http://localhost:8080/user/reg',(obj))
    .then((res)=>{
        console.log(res.data)
        if (res.data.msg) {
            
            toast.success(res.data.msg);
          }else{
            toast.error(res.data.err||err, {
                icon: "❌", 
              });
          }
            
        
        dispatch({type:REGISTERSUCCESS,payload:res.data})
    })
    .catch((err)=>{
       
        dispatch({type:ERROR,payload:err})
    })
}

export const LoginData=(obj ,Nav)=>(dispatch)=>{
    dispatch({type:LOADING})
    axios.post('http://localhost:8080/user/login',(obj))
    .then((res)=>{
        if (res.data.msg) {
            
            toast.success(res.data.msg);
            localStorage.setItem("isLoagin",true)
            Nav('/')
          }else{
            toast.error(res.data.err||err, {
                icon: "❌", 
              });
            Nav('/login')
          }
    })
    .catch((err)=>{
        dispatch({type:ERROR,payload:err})
    })
}