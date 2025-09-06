import React, { useState } from 'react'
import axios from 'axios'

const AdminLogin = () => {
    const[form , setForm]=useState({
        email:'',
        password:'',
    });
    const handleChange=(e)=>{
        const {name, value}=e.target;
        setForm((prev)=>({...prev,[name]:value}));
        console.log(form);
}

const handleSubmit= async (e)=>{
    e.preventDefault();
    // console.log(form);
    const res= await axios.post('http://localhost:5000/api/admin/login',form);
    
    console.log(res.data);
    if(res.data.message=="Login Successfully"){
      localStorage.setItem("role",res.data.admin.role)
      localStorage.setItem("email",res.data.admin.email)
      window.location.href='/admin'
    }else{
      window.alert("Your email or password is incorrect")
    }
}
  return (
        
  <div class="login-wrapper">
    <form class="login-form" onSubmit={handleSubmit}>
      <div class="avatar"></div>
      <h2>LOGIN</h2>
      <div class="input-group">
        <label for="adminName">Admin email</label>
        <input type="text" name="email" required placeholder='Enter Email' onChange={handleChange } />
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input type="password"  name="password" required placeholder='Enter Paswword' onChange={handleChange }/>
      </div>
      <button type="submit" class="login-btn">LOGIN</button>
      <div class="footer-text">Forgot Password?</div>
    </form>
  </div>
  );
}


export default AdminLogin;
