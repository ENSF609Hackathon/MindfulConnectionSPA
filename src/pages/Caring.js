import React, { Component , Fragment } from "react";
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Leftnav from '../components/Leftnav';
import Rightchat from '../components/Rightchat';
import Appfooter from '../components/Appfooter';
import Popupchat from '../components/Popupchat';


class Caring extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showGeneral: false,
            showOther: false
        };
    }

    toggleGeneral = () => {
        this.setState({ showGeneral: !this.state.showGeneral });
    };

    toggleOther = () => {
        this.setState({ showOther: !this.state.showOther });
    };

    render() {
        const { showGeneral, showOther } = this.state;

        return (
            <Fragment>
                <Header />
                <Leftnav />

                <div className="main-content bg-blue-gradiant theme-dark-bg right-chat-active">
                    <div className="middle-sidebar-bottom">
                        <div className="middle-sidebar-left">
                            <div className="middle-wrap">
                                <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">

                                    <div className="card-body p-lg-5 p-4 w-100 border-0">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="nav-caption fw-600 font-xssss text-grey-500 mb-2">
                                                    <button className="btn btn-link" onClick={this.toggleGeneral} style={{ fontSize: '20px', textDecoration: 'none' }}>
                                                        <i className="btn-round-md bg-white text-red feather-home font-xxl me-1"></i>
                                                        Cottage 1/Home
                                                    </button>
                                                </div>
                                                {showGeneral && (
                                                    <ul className="list-inline mb-4">
                                                        <li className="list-inline-item d-flex align-items-center border-bottom me-0">
                                                            <Link to="/userpage/1" className="pt-2 pb-2 d-flex align-items-center position-relative">
                                                                <div className="position-relative">
                                                                    <img src="assets/images/man1.png" alt="man" style={{ width: '60px', height: '60px', borderRadius: '50%', marginLeft: '50px' }} />
                                                                    <span className="badge bg-danger position-absolute top-0 end-0">1</span>
                                                                </div>
                                                                <h4 className="fw-600 font-xss mb-0 mt-0" style={{ marginLeft: '20px' }}>John Doe</h4>
                                                                <i className="ti-angle-right font-xsss text-grey-500" style={{ marginLeft: '20px' }}></i>
                                                            </Link>
                                                        </li>

                                                        <li className="list-inline-item d-flex align-items-center border-bottom me-0 position-relative">
                                                            <Link to="/userpage/2" className="pt-2 pb-2 d-flex align-items-center position-relative">
                                                                <div className="position-relative">
                                                                    <img src="assets/images/woman1.png" alt="woman" style={{ width: '60px', height: '60px', borderRadius: '50%', marginLeft: '50px' }} />
                                                                    <span className="badge bg-danger position-absolute top-0 end-0">3</span>
                                                                </div>
                                                                <h4 className="fw-600 font-xss mb-0 mt-0" style={{ marginLeft: '20px' }}>Jane Hass</h4>
                                                                <i className="ti-angle-right font-xsss text-grey-500" style={{ marginLeft: '20px' }}></i>
                                                            </Link>
                                                        </li>
                                                        {/* Add more list items as needed */}
                                                    </ul>
                                                )}

                                                <div className="nav-caption fw-600 font-xsss text-grey-500 mb-2">
                                                    <button className="btn btn-link" onClick={this.toggleOther} style={{ fontSize: '20px', textDecoration: 'none' }}>
                                                        <i className="btn-round-md bg-white text-orange feather-home font-xxl me-1"></i>
                                                        Cottage 2
                                                    </button>
                                                </div>
                                                {showOther && (
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item d-flex align-items-center border-bottom me-0 position-relative">
                                                            <Link to="/userpage/3" className="pt-2 pb-2 d-flex align-items-center position-relative">
                                                                <div className="position-relative">
                                                                    <img src="assets/images/man2.png" alt="man" style={{ width: '60px', height: '60px', borderRadius: '50%', marginLeft: '50px' }} />
                                                                    <span className="badge bg-danger position-absolute top-0 end-0">1</span>
                                                                </div>
                                                                <h4 className="fw-600 font-xss mb-0 mt-0" style={{ marginLeft: '20px' }}>Robert Doe</h4>
                                                                <i className="ti-angle-right font-xsss text-grey-500" style={{ marginLeft: '20px' }}></i>
                                                            </Link>
                                                        </li>
                                                        {/* Add more list items as needed */}
                                                    </ul>
                                                )}
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

export default Caring;