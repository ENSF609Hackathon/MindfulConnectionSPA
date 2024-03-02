import React, { Component , Fragment } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import baseImage from '../assets/loginPeople.webp'



const Login = () => {

    const {loginWithRedirect, user} = useAuth0()

    const handlesLogin = () => {
        alert("clicked")
        loginWithRedirect()
    }

    const seeUser = () => {
        console.dir(user)
    }


        return (
            <Fragment> 
                <div className="main-wrap">
                    <div className="nav-header bg-transparent shadow-none border-0">
                        <div className="nav-top w-100">
                            <a href="/"><i className="feather-activity text-success display1-size me-2 ms-0"></i><span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0">Mindful Connection</span> </a>
                            <button className="nav-menu me-0 ms-auto"></button>

                            <a href="/src/pages/Login" className="header-btn d-none d-lg-block bg-dark fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 rounded-xl">Login</a>
                            <a href="/register" className="header-btn d-none d-lg-block bg-current fw-500 text-white font-xsss p-3 ms-2 w100 text-center lh-20 rounded-xl">Register</a>
                        </div>
                    </div>
                    <div className="row">
                        <img className="col-xl-5 d-none d-xl-block p-0 vh-90 bg-image-cover bg-no-repeat" alt='happy people' src={baseImage}></img>
                            <div className="col-xl-7 vh-100 align-items-center d-flex bg-white rounded-3 overflow-hidden">
                                <div className="card shadow-none border-0 ms-auto me-auto login-card">
                                    <div className="card-body rounded-0 text-left">
                                        <h2 className="fw-700 display1-size display2-md-size mb-3">Login into <br />your account</h2>
                                        <div>
                                            <a onClick={loginWithRedirect} className="bg-dark fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 rounded-xl">Login</a>
                                            <a onClick={seeUser} className="bg-current fw-500 text-white font-xsss p-3 ms-2 w100 text-center lh-20 rounded-xl">Register</a>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        
                    </div>
                </div>
            </Fragment>
        );

}

export default Login;