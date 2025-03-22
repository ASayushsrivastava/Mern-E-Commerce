import React, { useState } from 'react'
import Layout from '../../components/layout/Layout'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import "../../styles/AuthStyles.css";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [answer, setAnswer] = useState("");
    const [visible, setVisible] = useState(true);
        
    const navigate = useNavigate();
    
    // form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const res = await axios.post("/api/v1/auth/forgot-password", {
            email,
            newPassword,
            answer
        });
        if (res && res.data.success) {
            toast.success(res.data && res.data.message);
            
            // navigate to home page
            navigate("/login");
        } else {
            toast.error(res.data.message);
        }
        } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
        }
    };
    return (
    <Layout title={'Forgot Password'}>
    <div className="form-container ">
        <form onSubmit={handleSubmit}>
        <h4 className="title">RESET PASSWORD</h4>

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
        <div className="mb-3">
            <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Favourite Show "
            required
            />
        </div>
        <div className="mb-3 d-flex ">
            <input
            type={visible ? "text":"password"}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Your New Password"
            required
            />
            <span className="input-group-text " onClick={() => setVisible(!visible)}>
            <i className={visible ? "bi bi-eye-slash" : "bi bi-eye"} />
            </span>
        </div>

        <button type="submit" className="btn btn-primary">
            Reset Password
            </button>
        
        </form>
    </div>
    </Layout>
    )
}

export default ForgotPassword
