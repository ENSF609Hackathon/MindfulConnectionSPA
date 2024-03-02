import React, { Component, Fragment } from "react";
import Header from '../components/Header';
import { Link } from 'react-router-dom';

import Appfooter from '../components/Appfooter';
import Popupchat from '../components/Popupchat';

class Emergencycontact extends Component {
    render() {
        return (
            <Fragment> 
            <Header />
            <div className="main-content bg-orange theme-dark-bg right-chat-active">
                <div className="middle-sidebar-bottom">
                    <div className="middle-sidebar-left">
                        <div className="middle-wrap">
                            <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">
                                <div className="card-body p-lg-5 p-4 w-100 border-0">
                                    <h4 className="font-xxl fw-700 mont-font mb-0">Useful Contacts</h4>
                                    <p className="font-xss text-grey-700">In case of non-emergency situations, you can contact the following:</p>
                                    <ul className="list-unstyled mt-1">
                                        <li><i className="ti-headphone-alt text-primary"></i> <strong>Front Desk Support Center:</strong> 403-123-3214</li>
                                        <li><i className="feather-phone-call text-primary"></i> <strong>IT Department:</strong> 587-123-4659</li>
                                    </ul>
                                    <br />
                                    
                                    <h4 className="font-xxl fw-700 mont-font mb-0">Emergency Contacts</h4>
                                    <p className="font-xss text-grey-700">In case of emergency, please contact the following numbers:</p>
                                    <ul className="list-unstyled mt-1">
                                        <li><i className="ti-user text-primary"></i> <strong>Police:</strong> 911</li>
                                        <li><i className="feather-truck text-primary"></i> <strong>Ambulance:</strong> 911</li>
                                        <li><i className="ti-alert text-primary"></i> <strong>Fire Department:</strong> 911</li>
                                        <li><i className="ti-shield text-primary"></i> <strong>Poison Control Center:</strong> 1-800-222-1222</li>
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

export default Emergencycontact;
