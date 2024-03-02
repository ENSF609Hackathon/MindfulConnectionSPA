import React, { Component , Fragment } from "react";
import Header from '../components/Header';
import Leftnav from '../components/Leftnav';
import Rightchat from '../components/Rightchat';
import Load from '../components/Load';
import Appfooter from '../components/Appfooter';
import Popupchat from '../components/Popupchat';

import ReactPlayer from 'react-player'

class Videos extends Component {
    render() {
        return (
            <Fragment> 
                <Header />
                <div className="main-content bg-lightgreen theme-dark-bg right-chat-active">
                    <div className="middle-sidebar-bottom">
                        <div className="middle-sidebar-left pe-0">
                            <div className="row justify-content-center">
                                <div className="col-lg-10" style={{ height: "5px" }}> {/* Adjusted height to 500px */}
                                    {/* Your content here */}
                                    <Load />
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

export default Videos;