import React, { useState } from 'react';
import '../LoginForm/LoginRegisterForm.css';
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import axios from 'axios';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            // Handle signup logic here   
            try {
                const res = await axios.post("/api/auth/signup", { email, password, confirmPassword });
                console.log(res.data);
              } catch (error) {
                console.error("Signup failed:", error.response ? error.response.data : error.message);
              }
        } else {
            alert("Passwords do not match!");
        };
        console.log(email, password);
    };

    return (
        <div className="login-container">
            <div className="wrapper">
                <h1>Signup</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-box">
                        <input 
                            type="email" 
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                       <MdEmail className='icon' />
                    </div>
                    <div className="input-box">
                        <input 
                            type="password" 
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                         <FaLock className='icon'/>
                    </div>
                    <div className="input-box">
                        <input 
                            type="password" 
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                         <FaLock className='icon'/>
                    </div>
                    <button type="submit">Signup</button>
                </form>
                <div className="register-link">
                    <p>Already have an account? <a href="/login">Login</a></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
