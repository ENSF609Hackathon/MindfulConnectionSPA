import React, { Component , Fragment } from "react";
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Leftnav from '../components/Leftnav';
import Rightchat from '../components/Rightchat';
import Appfooter from '../components/Appfooter';
import Popupchat from '../components/Popupchat';


class Knowledge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDisclaimer: false
        };
    }

    toggleDisclaimer = () => {
        this.setState({ showDisclaimer: !this.state.showDisclaimer });
    };

    render() {
        return (
            <Fragment> 
                <Header />
                <Leftnav />

                <div className="main-content bg-lightred theme-dark-bg right-chat-active">
                    <div className="middle-sidebar-bottom">
                        <div className="middle-sidebar-left">
                            <div className="middle-wrap">
                                <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">
                                    
                                    <div className="card-body p-lg-5 p-4 w-100 border-0">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <ul className="list-inline mb-4">
                                                    <li className="list-inline-item d-block border-bottom me-0">
                                                        <div className="pt-2 pb-2 d-flex align-items-center">
                                                            <i className="btn-round-md bg-white text-red feather-book font-xxl me-1"></i>
                                                            <h4 className="fw-600 font-xsss mb-0 mt-0">FAQs</h4>
                                                            <i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i>
                                                        </div>
                                                    </li>
                                                    <li className="list-inline-item d-block border-bottom me-0">
                                                        <a href="https://myhealth.alberta.ca/health/Pages/conditions.aspx?hwid=hwsxchk" className="pt-2 pb-2 d-flex align-items-center" target="_blank" rel="noopener noreferrer">
                                                            <i className="btn-round-md bg-white text-orange feather-book font-xxl me-1"></i>
                                                            <h4 className="fw-600 font-xsss mb-0 mt-0">Symptom Checker</h4>
                                                            <i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item d-block  me-0">
                                                        <a href="https://myhealth.alberta.ca/myhealthrecords" className="pt-2 pb-2 d-flex align-items-center" target="_blank" rel="noopener noreferrer">
                                                            <i className="btn-round-md bg-white text-yellow feather-book font-xxl me-1"></i>
                                                            <h4 className="fw-600 font-xsss mb-0 mt-0">Educational Resources</h4>
                                                            <i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i>
                                                        </a>
                                                    </li>
                                                </ul>

                                                <ul className="list-inline">
                                                    <li className="align-items-center">
                                                        <button onClick={this.toggleDisclaimer} style={{ border: 'none' }}>
                                                            <span className="fw-600 font-xsss" style={{ backgroundColor: 'white', padding: '5px', textDecoration: 'underline' }}>Disclaimer</span>
                                                        </button>
                                                        {this.state.showDisclaimer && (
                                                            <div className="disclaimer">
                                                                <p>"Disclaimer: Every caregiving
                                                                    journey is unique, with its own
                                                                    challenges and considerations.
                                                                    While we endeavor to provide
                                                                    valuable insights, it's important
                                                                    to recognize that the
                                                                    information shared may not
                                                                    directly align with your individual
                                                                    circumstances. While we aim for
                                                                    accuracy and helpfulness, we
                                                                    can't guarantee the suitability
                                                                    or applicability of the resources.
                                                                    We strongly advise seeking
                                                                    professional guidance who can
                                                                    offer tailored support and
                                                                    advice to meet your loved one's
                                                                    specific needs."
                                                                </p>
                                                            </div>
                                                        )}
                                                    </li>
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

export default Knowledge;