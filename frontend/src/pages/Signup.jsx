import React, {  useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router';
import { signupdata } from '../Redux/LoginSignup/action';


const Signup = () => {
    const [userdata,setUserdata]=useState({
        name:"",
        email:"",
        password:""
    })
    const Nav=useNavigate()
    const store = useSelector(s=>s)
    const dispatch=useDispatch()


    const handlechange=(e)=>{
        let {name,value}=e.target
        setUserdata({...userdata,[name]:value})
    }
    const handlesubmit=(e)=>{
        e.preventDefault()
        if (!userdata.name || !userdata.email || !userdata.password) {
            alert("All fields are required!");
            return;
        }
        dispatch(signupdata(userdata))
        Nav('/login')
    }
  return (
    <div>
        <form action="" onSubmit={handlesubmit}>
            <input type="text" name="name" id="" onChange={handlechange} />
            <input type="text" name="email" id="" onChange={handlechange} />
            <input type="text" name="password" id="" onChange={handlechange} />
            <input type="submit"  />
        </form>
    </div>
  )
}

export default Signup