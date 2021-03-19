import React, {Component} from 'react';
import BackGroundVideo from '../video/main_login.mp4';
import '../css/LoginPage.css'

class LoginPage extends Component {
    render() {
        return (
            <div>
                <video autoPlay loop muted
                       style={{
                           position: 'absolute',
                           width: '100vw',
                           height: '100vh',
                           objectFit: "cover",
                           right: "0px",
                           left: "0px",
                           top: "0px",
                       }}>
                    <source src={BackGroundVideo} type="video/mp4"/>
                </video>
                <div className="backGroundSet">
                    <div className="Login_Container">
                        <div className="Login_Title">
                            <div className="login_check"></div>
                        </div>
                        <div className="Login_from">
                            <div className="Login_Row">
                                <svg className="Login_icon" viewBox="0 0 20 20">
                                    <path className="Login_path"
                                          d="M0,20 a10,8 0 0,1 20,0z M10,0 a4,4 0 0,1 0,8 a4,4 0 0,1 0,-8"/>
                                </svg>
                                <input type="text" className="login_input_id" placeholder="Username"/>
                            </div>
                            <div className="Login_Row">
                                <svg className="Login_icon" viewBox="0 0 20 20">
                                    <path className="Login_path"
                                          d="M0,20 20,20 20,8 0,8z M10,13 10,16z M4,8 a6,8 0 0,1 12,0"/>
                                </svg>
                                <input type="password" className="login_input_pw" placeholder="Password"/>
                            </div>
                            <div className="space"></div>
                            <button type="button" className="login_button">Sign in</button>
                            <p className="Login_signup">Don't have an account? &nbsp;<a>Sign up</a></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;

