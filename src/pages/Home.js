import React, { Component , Fragment } from "react";
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';


import Header from '../components/Header';
import Leftnav from '../components/Leftnav';
import Rightchat from '../components/Rightchat';
import Appfooter from '../components/Appfooter';
import Popupchat from '../components/Popupchat';


import Friends from '../components/Friends';
import Contacts from '../components/Contacts';
import Group from '../components/Group';
import Events from '../components/Events';
import Createpost from '../components/Createpost';
import Memberslider from '../components/Memberslider';
import Friendsilder from '../components/Friendsilder';
import Storyslider from '../components/Storyslider';
import Postview from '../components/Postview';
import Load from '../components/Load';
import Profilephoto from '../components/Profilephoto';
import baseImage from "../assets/loginPeople.webp";
import logo from '../assets/Logo.jpg'

const Home = () =>  {

    const { isAuthenticated, isLoading, user, loginWithRedirect } = useAuth0();

    if(isLoading){
        return<div>Loading..</div>
    }

    if(isAuthenticated){
        return (
            <Fragment>
                <Header />
                <div className="main-content bg-lightred theme-dark-bg right-chat-active">
                    <div className="middle-sidebar-bottom">
                        <div className="middle-sidebar-left">
                            <div className="col d-flex align-items-center">
                                <div className="row text-align-center">
                                    <Link to={`${process.env.PUBLIC_URL}/caring`}>
                                        <div className="mx-auto feather-user-plus text-black bg p-3" style={{ fontSize: "800%"}}>
                                            <img className="mx-5" src="assets/images/caringlogo.png" alt="Your Feather Book Image" style={{ width: '50%', position: 'relative' }} />
                                        </div>
                                    </Link>
                                </div>
                                <div className="row">
                                    <Link to={`${process.env.PUBLIC_URL}/knowledge`}>
                                        <div className="feather-book text-black bg p-3" style={{ fontSize: "800%"}}>
                                            <img className="mx-5" src="assets/images/knowledgelogo.png" alt="Your Feather User Plus Image" style={{ width: '50%', position: 'relative' }} />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="text-center mt-5">
                                <p className="font-xl">"A proper TLR technique today, Keeps the Doctor away... We will always have your back, so please save yours... 😊"</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Appfooter />
            </Fragment>
        );
    } else {
        return(
            <Fragment>
                {/*<div className="main-wrap">*/}
                {/*    <div className="nav-header bg-transparent shadow-none border-0">*/}
                {/*        <div className="nav-top w-100">*/}
                {/*            <a href="/"><span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0">Mindful Connection</span> </a>*/}
                {/*            <button className="nav-menu me-0 ms-auto"></button>*/}

                {/*            /!*<a onClick={handlesLogout} className="header-btn d-none d-lg-block bg-dark fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 rounded-xl">Login</a>*!/*/}
                {/*            /!*<a href="/register" className="header-btn d-none d-lg-block bg-current fw-500 text-white font-xsss p-3 ms-2 w100 text-center lh-20 rounded-xl">Register</a>*!/*/}
                {/*        </div>*/}
                {/*    </div>*/}

                    <div className="row">
                        <img className="col-xl-6 d-none d-xl-block p-0 vh-90 bg-image-cover bg-no-repeat" alt='happy people' src={baseImage}></img>
                        <div className="col-xl-6 vh-100 align-items-center d-flex bg-white rounded-3 overflow-hidden">
                            <div className="card shadow-none border-0 ms-auto me-auto login-card">
                                <div className="card-body rounded-0 text-left">
                                    <img className="mb-5" alt={"Logo"} style={{width: '400px', height: 'auto'}} src={logo}/>
                                    <h2 className="fw-700 ms-5 display1-size display2-md-size mb-3">Login into <br />your account</h2>
                                    <div className="ms-5">
                                        <a onClick={loginWithRedirect} className="bg-success fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 rounded-xl">Login</a>
                                        <a onClick={loginWithRedirect} className="bg-current fw-500 text-white font-xsss p-3 ms-2 w100 text-center lh-20 rounded-xl">Register</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                {/*</div>*/}
            </Fragment>
        )
    }



}


export default Home;