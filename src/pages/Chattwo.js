import React, { Component, Fragment } from "react";
import Header from '../components/Header';
import Leftnav from '../components/Leftnav';
import Rightchat from '../components/Rightchat';
import Appfooter from '../components/Appfooter';
import Popupchat from '../components/Popupchat';

class Chattwo extends Component {
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
                                                            <img src="assets/images/chad.png" alt="avater" />
                                                        </figure>
                                                        <div>
                                                            <h5>Dr. Chad Giga</h5>
                                                            <div className="time">09:00 AM</div>
                                                        </div>
                                                    </div>
                                                    <div className="message-wrap">Good morning, Eric. Was there anything you needed assistance with?</div>
                                                </div>

                                                <div className="message-item outgoing-message">
                                                    <div className="message-user">
                                                        <figure className="avatar">
                                                            <img src="assets/images/user.png" alt="avater" />
                                                        </figure>
                                                        <div>
                                                            <h5>Eric Lee</h5>
                                                            <div className="time">09:02 AM<i className="ti-double-check text-info"></i></div>
                                                        </div>
                                                    </div>
                                                    <div className="message-wrap">Hi Dr. Giga, I need some information about a patient's disease. Can you help me?</div>
                                                </div>

                                                <div className="message-item">
                                                    <div className="message-user">
                                                        <figure className="avatar">
                                                            <img src="assets/images/chad.png" alt="avater" />
                                                        </figure>
                                                        <div>
                                                            <h5>Dr. Chad Giga</h5>
                                                            <div className="time">09:05 AM</div>
                                                        </div>
                                                    </div>
                                                    <div className="message-wrap">Of course, Eric. What specific disease are you inquiring about?</div>
                                                </div>

                                                <div className="message-item outgoing-message">
                                                    <div className="message-user">
                                                        <figure className="avatar">
                                                            <img src="assets/images/user.png" alt="avater" />
                                                        </figure>
                                                        <div>
                                                            <h5>Eric Lee</h5>
                                                            <div className="time">09:08 AM<i className="ti-double-check text-info"></i></div>
                                                        </div>
                                                    </div>
                                                    <div className="message-wrap">I need information about Alzheimer's disease for one of our patients. Can you provide details?</div>
                                                </div>

                                                <div className="message-item">
                                                    <div className="message-user">
                                                        <figure className="avatar">
                                                            <img src="assets/images/chad.png" alt="avater" />
                                                        </figure>
                                                        <div>
                                                            <h5>Dr. Chad Giga</h5>
                                                            <div className="time">09:10 AM</div>
                                                        </div>
                                                    </div>
                                                    <div className="message-wrap">Sure, Eric. Let me gather the necessary information for you.</div>
                                                </div>

                                                <div className="message-item outgoing-message">
                                                    <div className="message-user">
                                                        <figure className="avatar">
                                                            <img src="assets/images/user.png" alt="avater" />
                                                        </figure>
                                                        <div>
                                                            <h5>Eric Lee</h5>
                                                            <div className="time">09:15 AM<i className="ti-double-check text-info"></i></div>
                                                        </div>
                                                    </div>
                                                    <div className="message-wrap">Thank you, Dr. Giga. I'll wait for your response.</div>
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

export default Chattwo;
