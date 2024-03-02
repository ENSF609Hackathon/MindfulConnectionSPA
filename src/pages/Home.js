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
                            <div className="col d-flex align-items-center">
                            <div className="row text-align-center">
                            <Link to="\caring">
                                <div className="mx-auto feather-user-plus text-black bg p-3" style={{ fontSize: "800%"}}>
                                <img className="mx-5" src="assets/images/caringlogo.png" alt="Your Feather Book Image" style={{ width: '50%', position: 'relative' }} />
                                </div>
                            </Link>
                            </div>
                            <div className="row">
                            <Link to="\knowledge">
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
    }
}


export default Home;