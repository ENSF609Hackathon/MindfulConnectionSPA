import React, { Component , Fragment } from "react";
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Leftnav from '../components/Leftnav';
import Rightchat from '../components/Rightchat';
import Appfooter from '../components/Appfooter';
import Popupchat from '../components/Popupchat';

const emailList = [
    {
        imageUrl: 'user.png',
        name: 'Hurin Seary',
        status: 'bg-success',
        subject: 'Mobile App Design',
        des: 'Hey Cak, Could you free now? Can you look and read the brief first before.',
        attach: 'attach',
        time: '12:45 PM',
        read: 'bg-lightblue theme-light-bg'
    },
    {
        imageUrl: 'user.png',
        name: 'Victor Exrixon',
        email: 'support@gmail.com',
        status: 'bg-success',
        subject: 'Mobile App Design',
        des: 'Hey Cak, Could you free now? Can you look and read the brief first before.',
        attach: '',
        time: '12:45 PM',
        read: ''
    },

]

class ChatMenu extends Component {
    handleClick = (name) => {
        localStorage.setItem('ChatUserName', name);
    }
    render() {

        return (
            <Fragment> 
                <Header />
                <Leftnav />
                <Rightchat />

                <div className="main-content right-chat-active">
                    <div className="middle-sidebar-bottom">
                        <div className="middle-sidebar-left pe-0 ps-lg-3 ms-0 me-0" style={{maxWidth:`100%`}}>
                            <div className="row">
                                <div className="col-lg-12">

                                    <div className="chat-wrapper p-3 w-100 position-relative scroll-bar bg-white theme-dark-bg">
                                        <ul className="email-message">
                                            {emailList.map((value , index) => (
                                                
                                            <li key={index} >
                                                
                                                <Link to="/defaultmessagechat" className={`rounded-3`} onClick={() => this.handleClick(value.name)}>
                                                    <div className="email-user">
                                                        {/* <span className="btn-round-xss ms-0 bg-success me-2"></span> */}
                                                        <img src={`assets/images/${value.imageUrl}`} alt="user" className="w35 me-2" />  
                                                        <h6 className="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-700">{value.name}</h6>
                                                    </div>
                                                    <div className="email-text text-grey-500 fw-600 font-xssss">{value.des}</div>
                                                    <div className="email-time text-grey-500 fw-600">{value.time}</div>
                                                </Link>
                                            </li>

                                            ))}
                                                

                                        </ul>                                 
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

export default ChatMenu;