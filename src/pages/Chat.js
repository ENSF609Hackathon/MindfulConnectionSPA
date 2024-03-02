import React, { Component, Fragment } from "react";
import Header from '../components/Header';
import Leftnav from '../components/Leftnav';
import Rightchat from '../components/Rightchat';
import Appfooter from '../components/Appfooter';
import Popupchat from '../components/Popupchat';

//code here to import user info from the instance and add the name 

class Chat extends Component {
    render() {
        return (
            <Fragment> 
                <Header />
                <Leftnav />
                <Rightchat />

                <div className="main-content right-chat-active">
                    <div className="middle-sidebar-bottom">
                        <div className="middle-sidebar-left pe-0" style={{maxWidth: "100%"}}>
                            <div className="row">
                                <div className="col-lg-12 position-relative">
                                    <div className="chat-wrapper pt-0 w-100 position-relative scroll-bar bg-white theme-dark-bg">
                                        <div className="chat-body p-3 ">
                                            <div className="messages-content pb-5">
                                                <div className="message-item">
                                                    <div className="message-user">
                                                        <figure className="avatar">
                                                            <img src="assets/images/frontdesk.png" alt="avater" />
                                                        </figure>
                                                        <div>
                                                            <h5>Front Desk</h5>
                                                            <div className="time">10:00 AM</div>
                                                        </div>
                                                    </div>
                                                    <div className="message-wrap">Hello! How may I assist you today?</div>
                                                </div>

                                                <div className="message-item outgoing-message">
                                                    <div className="message-user">
                                                        <figure className="avatar">
                                                            <img src="assets/images/user.png" alt="avater" />
                                                        </figure>
                                                        <div>
                                                            <h5>Eric Lee</h5>
                                                            <div className="time">10:02 AM<i className="ti-double-check text-info"></i></div>
                                                        </div>
                                                    </div>
                                                    <div className="message-wrap">Hi, I'm trying to access medical information of my patients. How can I do that?</div>
                                                </div>

                                                <div className="message-item">
                                                    <div className="message-user">
                                                        <figure className="avatar">
                                                            <img src="assets/images/frontdesk.png" alt="avater" />
                                                        </figure>
                                                        <div>
                                                            <h5>Front Desk</h5>
                                                            <div className="time">10:10 AM</div>
                                                        </div>
                                                    </div>
                                                    <div className="message-wrap">Sure! After logging in, you can navigate to the "Let's start caring!" section in the home tab. Press on the relevant patient, then the "Medications" tab.</div>
                                                </div>

                                                <div className="message-item outgoing-message">
                                                    <div className="message-user">
                                                        <figure className="avatar">
                                                            <img src="assets/images/user.png" alt="avater" />
                                                        </figure>
                                                        <div>
                                                            <h5>Eric Lee</h5>
                                                            <div className="time">10:12 AM<i className="ti-double-check text-info"></i></div>
                                                        </div>
                                                    </div>
                                                    <div className="message-wrap">Got it! Thank you. Also, where can I change my password?</div>
                                                </div>

                                                <div className="message-item">
                                                    <div className="message-user">
                                                        <figure className="avatar">
                                                            <img src="assets/images/frontdesk.png" alt="avater" />
                                                        </figure>
                                                        <div>
                                                            <h5>Front Desk</h5>
                                                            <div className="time">10:15 AM</div>
                                                        </div>
                                                    </div>
                                                    <div className="message-wrap">You can change your password by clicking on the fourth icon on the menu which looks like a person. There should be an option to change your password there. </div>
                                                </div>

                                                <div className="message-item outgoing-message">
                                                    <div className="message-user">
                                                        <figure className="avatar">
                                                            <img src="assets/images/user.png" alt="avater" />
                                                        </figure>
                                                        <div>
                                                            <h5>Eric Lee</h5>
                                                            <div className="time">10:17 AM<i className="ti-double-check text-info"></i></div>
                                                        </div>
                                                    </div>
                                                    <div className="message-wrap">Thank you for your help!</div>
                                                </div>

                                                <div className="message-item">
                                                    <div className="message-user">
                                                        <figure className="avatar">
                                                            <img src="assets/images/frontdesk.png" alt="avater" />
                                                        </figure>
                                                        <div>
                                                            <h5>Front Desk</h5>
                                                            <div className="time">10:21 AM</div>
                                                        </div>
                                                    </div>
                                                    <div className="message-wrap">No problem. Have a great day!</div>
                                                </div>

                                                <div className="clearfix"></div>


                                            </div>
                                        </div>
                                    </div>
                                    <div className="chat-bottom dark-bg p-3 shadow-none theme-dark-bg" style={{width:"98%"}}>
                                        <form className="chat-form">
                                            <button className="bg-grey float-left"><i className="ti-microphone text-grey-600"></i></button>
                                            <div className="form-group"><input type="text" placeholder="Start typing.." /></div>          
                                            <button className="bg-current"><i className="ti-arrow-right text-white"></i></button>
                                        </form>
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

export default Chat;