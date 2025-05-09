import React, { useState } from "react";
import Layout from "./../../components/layout/Layout";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import "../../styles/AuthStyles.css";

// importing custom hook for context
import { useAuth } from "../../context/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

// creating varibale for the context auth
const [auth,setAuth] = useAuth()

  const navigate = useNavigate();
  const location = useLocation()

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        
        // setting login values into the context before navigation
        // getting user and token from response
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        })
        
        localStorage.setItem('auth',JSON.stringify(res.data))  // storing in local storage. 
        
        // navigate to home page

        navigate(location.state||"/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title="Register - Ecommer App">
      <div className="form-container ">
        <form onSubmit={handleSubmit}>
          <h4 className="title">LOGIN FORM</h4>

          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3 d-flex ">
            <input
              type={visible ? "text":"password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
            <span className="input-group-text " onClick={() => setVisible(!visible)}>
              <i className={visible ? "bi bi-eye-slash" : "bi bi-eye"} />
            </span>
          </div>

          <div className="mb-3 d-flex">
            <button type="submit" className="btn btn-primary mx-1" onClick={()=> {navigate('/forgot-password')}}>
              Forgot Password
            </button>
            <button type="submit" className="btn btn-primary mx-1" onClick={()=> {navigate('/register')}}>
              Register
            </button>
          
          </div>

          <button type="submit" className="btn btn-primary w-100">
              LOGIN
            </button>
          
        </form>
      </div>
    </Layout>
  );
};

export default Login;
