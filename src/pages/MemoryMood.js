import {Link} from "react-router-dom";
import React from "react";
import Header from "../components/Header";

export const MemoryMood = () => {
    return (
        <div>
            <Header/>
            <div className="main-content bg-lightblue theme-dark-bg">
                <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">

                    <div className="card-body p-lg-5 p-4 w-100 border-0">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="mt-4 mb-4 font-xxl fw-700 mont-font">Memory Mood</div>
                                {/*<div className="nav-caption fw-600 font-xss mb-4">Resources</div>*/}
                                <ul className="list-group mb-4">
                                    <li className="list-item d-block border-bottom me-0"><Link
                                        to="/accountinformation" className="pt-2 pb-2 d-flex align-items-center"><i
                                        className="btn-round-md bg-primary-gradiant text-white feather-home font-md me-3"></i>
                                        <h4 className="fw-600 font-xsss mb-0 mt-0">John's mood messages</h4><i
                                            className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i></Link>
                                        <ul className="list-group mr-2 mb-4">
                                            <li className="list-item d-block border-bottom me-0"><Link
                                                to="/contactinformation"
                                                className="pt-2 pb-2 d-flex align-items-center"><i
                                                className="btn-round-md bg-gold-gradiant text-white feather-map-pin font-md me-3"></i>
                                                <h4 className="fw-600 font-xsss mb-0 mt-0">Unread Messages</h4><i
                                                    className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i></Link>
                                            </li>
                                            <li className="list-item d-block border-bottom me-0"><Link
                                                to="/contactinformation"
                                                className="pt-2 pb-2 d-flex align-items-center"><i
                                                className="btn-round-md bg-gold-gradiant text-white feather-map-pin font-md me-3"></i>
                                                <h4 className="fw-600 font-xsss mb-0 mt-0">Compose Message</h4><i
                                                    className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i></Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="list-item d-block border-bottom me-0"><Link
                                        to="/contactinformation" className="pt-2 pb-2 d-flex align-items-center"><i
                                        className="btn-round-md bg-gold-gradiant text-white feather-map-pin font-md me-3"></i>
                                        <h4 className="fw-600 font-xsss mb-0 mt-0">How is John reacting to care and
                                            environment?</h4><i
                                            className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i></Link>
                                    </li>
                                    <li className="list-item d-block border-bottom me-0"><Link
                                        to="/contactinformation" className="pt-2 pb-2 d-flex align-items-center"><i
                                        className="btn-round-md bg-gold-gradiant text-white feather-map-pin font-md me-3"></i>
                                        <h4 className="fw-600 font-xsss mb-0 mt-0">Here's some strategies on managing
                                            those challenging symptoms</h4><i
                                            className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};