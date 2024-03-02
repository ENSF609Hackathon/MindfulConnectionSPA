import React from "react"
import Header from "../components/Header"
import myHealthIcon from "../assets/myHealth.png"
import roonIcon from "../assets/roon.webp"
import asIcon from "../assets/alzheimersSociety.png"
import ahsIcon from "../assets/ahs.jpg"

function EducationalResources() {
    return (
        <div>
            <Header />
            <div className="main-content bg-lightblue theme-dark-bg">
                <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">
                    <div className="card-body p-lg-5 p-4 w-100 border-0">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="mt-4 mb-4 font-xxl fw-700 mont-font">Educational Resources</div>
                                <ul className="list-inline mb-4">
                                    <li className="list-inline-item d-block border-bottom me-0">
                                        <a
                                            href='https://www.roon.com/'
                                            target="_blank"  // Opens the link in a new tab
                                            rel="noopener noreferrer"  // Recommended for security reasons
                                            className="pt-2 pb-2 d-flex align-items-center"
                                        >
                                            <img src={roonIcon} alt="MyHealth Icon" className="btn-round-md me-3" />
                                            <h4 className="fw-600 font-xsss mb-0 mt-0">Roon - Your Trusted Guide for Health Conditions</h4>
                                            <i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item d-block border-bottom me-0">
                                        <a
                                            href='https://alzheimer.ca/en/about-dementia/do-i-have-dementia/how-get-tested-dementia-tips-individuals-families-friends?gad_source=1&gclid=EAIaIQobChMIq_3f6Ku5hAMVshqtBh0FLgvGEAAYASAAEgKUIvD_BwE'
                                            target="_blank"  // Opens the link in a new tab
                                            rel="noopener noreferrer"  // Recommended for security reasons
                                            className="pt-2 pb-2 d-flex align-items-center"
                                        >
                                            <img src={asIcon} alt="MyHealth Icon" className="btn-round-md me-3" />
                                            <h4 className="fw-600 font-xsss mb-0 mt-0">Alzheimer Society - How to get tested for dementia: Tips for individuals, families and friends</h4>
                                            <i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item d-block border-bottom me-0">
                                        <a
                                            href='https://myhealth.alberta.ca/Pages/HealthInfoToolsDefault.aspx'
                                            target="_blank"  // Opens the link in a new tab
                                            rel="noopener noreferrer"  // Recommended for security reasons
                                            className="pt-2 pb-2 d-flex align-items-center"
                                        >
                                            <img src={ahsIcon} alt="MyHealth Icon" className="btn-round-md me-3" />
                                            <h4 className="fw-600 font-xsss mb-0 mt-0">MyHealth Alberta - Health Information and Tools</h4>
                                            <i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item d-block border-bottom me-0">
                                        <a
                                            href='https://myhealth.alberta.ca/myhealthrecords'
                                            target="_blank"  // Opens the link in a new tab
                                            rel="noopener noreferrer"  // Recommended for security reasons
                                            className="pt-2 pb-2 d-flex align-items-center"
                                        >
                                            <img src={myHealthIcon} alt="MyHealth Icon" className="btn-round-md me-3" />
                                            <h4 className="fw-600 font-xsss mb-0 mt-0">MyHealth Records - Sign In Page</h4>
                                            <i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EducationalResources;
