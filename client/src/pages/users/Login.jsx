import { useState } from 'react';
import axios from 'axios';
import './Login.css';
import logo from "./Logo.png";

const Login = () => {
  const [data, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/examinee/login', data);
    if (res.data.message === "Login Successfully") {
      localStorage.setItem("userRole", res.data.user.role);
      localStorage.setItem("userEmail", res.data.user.email);
      localStorage.setItem("userId", res.data.user.id);
      window.location.href = '/users';
    }
  };

  return (
    <div className="login-wrapper">
      <form className="login-form" onSubmit={handleSubmit} method="post">
        <div className="avatar">
          <img src={logo} alt="" className="avatar-logo"/>
        </div>
        <h2>Welcome Back</h2>
        <div className="input-group">
          <label>Email</label>
          <input type="text" name="email" onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" name="password" onChange={handleChange} required />
        </div>
        <div className="options">
          <label>
            <input type="checkbox" /> Remember me
          </label>
        </div>
        <button type="submit" className="login-btn">LOGIN</button>
        <div className="footer-text">Forgot Username / Password?</div>
      </form>
    </div>
  );
};

export default Login;
