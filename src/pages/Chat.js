import React, { Component, Fragment } from "react";
import Header from '../components/Header';
import Leftnav from '../components/Leftnav';
import Rightchat from '../components/Rightchat';
import Appfooter from '../components/Appfooter';
import Popupchat from '../components/Popupchat';
import Message from "../components/Message";
import { Link } from 'react-router-dom';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messagesList: [
            ],
        };
    }

    componentDidMount() {
        const { messagesList } = this.state;
        // Update the incoming message when the component mounts
        this.setState({
            messagesList: [
                {
                    messageOutgoing: false,
                    name: localStorage.getItem('ChatUserName'),
                    time: new Date(),
                    message: "example incoming",
                },
                {
                    messageOutgoing: true,
                    name: "me",
                    time: new Date(),
                    message: "example outgoing",
                
                    
                }
            ],
        });
    }

    render() {
        const { messagesList, exampleIncoming } = this.state;
        return (
            <Fragment>
                <Header />
                <Leftnav />
                <Rightchat />

                <div className="main-content right-chat-active">
                    <div className="middle-sidebar-bottom">
                        <div className="middle-sidebar-left pe-0" style={{ maxWidth: "100%" }}>
                            <div className="row">
                                <div className="col-lg-12 position-relative">
                                    <div className="chat-wrapper pt-0 w-100 position-relative scroll-bar bg-white theme-dark-bg">
                                        <div className="chat-body p-3 ">
                                            <div className="messages-content pb-5">
                                                {messagesList.map((message, index) => (
                                                    <Message
                                                        key={index}
                                                        messageOutgoing={message.messageOutgoing}
                                                        name={message.name}
                                                        time={message.time}
                                                        message={message.message}
                                                    />
                                                ))}
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chat-bottom dark-bg p-3 shadow-none theme-dark-bg" style={{ width: "98%" }}>
                                        <form className="chat-form">
                                            <div className="form-group"><input type="text" placeholder="Start typing.." /></div>
                                            <button className="bg-current"><i className="ti-arrow-right text-white"></i></button>
                                            <Link to="/defaultmessage" className={`rounded-3`} ><button className="bg-current">Back</button></Link>
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