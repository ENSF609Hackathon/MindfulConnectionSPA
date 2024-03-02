import React, { Component , Fragment } from "react";
import { Link } from 'react-router-dom';

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

class Home extends Component {
    render() {
        return (
            <Fragment> 
                <Header />
                <div className="main-content bg-lightred theme-dark-bg right-chat-active">
                    <div className="middle-sidebar-bottom">
                        <div className="middle-sidebar-left">
                            <div className="row feed-body">
                                <div style={{ marginTop: '200px' }}> {/* Adjusted margin-top */}
                                    {/* Your content here */}
                                    <div className="d-flex justify-content-center top"> 
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
                                            <div className="feather-user-plus text-white bg p-3" style={{ fontSize: "240px", marginRight: "300px" }}></div>
                                            <div className="feather-book text-white bg p-3" style={{ fontSize: "240px", marginLeft: "300px" }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ marginTop: '0px' }}> {/* Adjusted margin-top */}
                                    {/* Your content here */}
                                    <div className="d-flex justify-content-center top"> 
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2px' }}>
                                        <div style={{ marginRight: '300px' }}>
                                            <Link to="/caring">
                                                <img src="assets/images/caringlogo.png" alt="Your Feather Book Image" style={{ width: '300px', position: 'relative' }} />
                                                <div className="position-absolute" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                                <div className="d-inline-block bg-orange rounded-circle position-relative" style={{ width: '50px', height: '50px', marginRight: "720px", marginBottom: "185px", border: '2px solid black'}}>
                                                    <div className="position-absolute top-50 start-50 translate-middle" style={{ fontSize: '26px', color: 'black', fontWeight: 'bold'}}>
                                                        3
                                                    </div>
                                                </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div style={{ marginLeft: '300px' }}>
                                            <Link to="/knowledge">
                                                <img src="assets/images/knowledgelogo.png" alt="Your Feather User Plus Image" style={{ width: '300px' }} />
                                            </Link>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div style={{ marginTop: '100px' }}>
                                    <div className="text-center mt-5">
                                        <p className="font-xl">"A proper TLR technique today, Keeps the Doctor away... We will always have your back, so please save yours... 😊"</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Popupchat />
                <Appfooter /> 
            </Fragment>
        );
    }
}


export default Home;