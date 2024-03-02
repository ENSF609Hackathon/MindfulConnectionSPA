
import React, {Fragment} from "react";
import Header from "../components/Header";
import Leftnav from "../components/Leftnav";
import Residences from "../components/Residences";
import {Link} from "react-router-dom";

export const ResidenceList = () => {
    return (
        <Fragment>
            <Header />
            <Leftnav />

            <div className="main-content bg-lightblue theme-dark-bg right-chat-active">
                <div className="middle-sidebar-bottom">
                    <div className="middle-sidebar-left">
                        <div className="middle-wrap">
                            <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">

                                <div className="card-body p-lg-5 p-4 w-100 border-0">
                                    <Residences/>


                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </Fragment>

    )
};

export default ResidenceList;