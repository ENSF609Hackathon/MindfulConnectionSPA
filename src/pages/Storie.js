import React, { Component, Fragment } from "react";
import Header from '../components/Header';
import { Link } from 'react-router-dom';

import Appfooter from '../components/Appfooter';
import Popupchat from '../components/Popupchat';

class Storie extends Component {
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
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="nav-caption fw-600 font-xl text-grey-800 mb-2">Support</div>
                                                <ul className="list-inline mb-4">
                                                    <li className="list-inline-item d-block border-bottom me-0"><Link to="/defaultmessage" className="pt-2 pb-2 d-flex align-items-center"><i className="btn-round-md bg-primary-gradiant text-white feather-user font-md me-3"></i> <h4 className="fw-600 font-xsss mb-0 mt-0">Front Desk</h4><i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i></Link></li>
                                                    <li className="list-inline-item d-block border-bottom me-0"><Link to="/professionalmessage" className="pt-2 pb-2 d-flex align-items-center"><i className="btn-round-md bg-blue-gradiant text-white feather-clipboard font-md me-3"></i> <h4 className="fw-600 font-xsss mb-0 mt-0">Professional Help</h4><i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i></Link></li>
                                                    </ul>

                                                <div className="nav-caption fw-600 font-xl text-grey-800 mb-2">Other</div>
                                                <ul className="list-inline">
                                                    <li className="list-inline-item d-block border-bottom me-0"><Link to="/Emergencycontact" className="pt-2 pb-2 d-flex align-items-center"><i className="btn-round-md bg-gold-gradiant text-white feather-phone-incoming font-md me-3"></i> <h4 className="fw-600 font-xsss mb-0 mt-0">Useful Contacts/Emergency</h4><i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i></Link></li>
                                                    <li className="list-inline-item d-block me-0"><a href="/defaultstorie" className="pt-2 pb-2 d-flex align-items-center"><i className="btn-round-md bg-red-gradiant text-white feather-mail font-md me-3"></i> <h4 className="fw-600 font-xsss mb-0 mt-0">Email</h4><i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i></a></li>
                                                    <li className="list-inline-item d-block  me-0"><Link to="/Nearbyservices" className="pt-2 pb-2 d-flex align-items-center"><i className="btn-round-md bg-green-gradiant text-white feather-map-pin font-md me-3"></i> <h4 className="fw-600 font-xsss mb-0 mt-0">Nearby Services</h4><i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>


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

export default Storie;
