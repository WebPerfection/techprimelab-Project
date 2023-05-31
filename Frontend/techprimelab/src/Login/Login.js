import React, { useState } from 'react';
import './Login.css'; // import CSS file for styling
import logo from '../Icons/Logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="login-container">
            <div className="container">
                <div className="logo-container">
                    <img src={logo} alt="Logo" />
                    <h4>Online Project Management</h4>
                </div>
                <div className="form-container">
                    <form>
                        <h3>Login to get start</h3>
                        <span>Email</span>
                        <div className="Username-input-container">

                            <input type="text" placeholder="Username" />
                        </div>
                        <span>Password</span>

                        <div className="password-input-container">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Password"
                            />
                            <span
                                className={`password-toggle ${showPassword ? 'visible' : ''}`}
                                onClick={toggleShowPassword}
                            >
                                {showPassword ? (
                                    <FontAwesomeIcon icon={faEyeSlash} />
                                ) : (
                                    <FontAwesomeIcon icon={faEye} />
                                )}
                            </span>
                        </div>
                        <div className="forgot-password">
                            <a href="#" className="red-link">
                                Forgot Password?
                            </a>
                        </div>
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Login;