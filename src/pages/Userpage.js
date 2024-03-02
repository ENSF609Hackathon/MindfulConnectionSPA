import React, { Component , Fragment } from "react";
import Header from '../components/Header';
import Leftnav from '../components/Leftnav';
import Rightchat from '../components/Rightchat';
import Appfooter from '../components/Appfooter';
import Popupchat from '../components/Popupchat';

import Profiledetail from '../components/Profiledetail';
import Profilephoto from '../components/Profilephoto';
import ProfilecardThree from '../components/ProfilecardThree';
import Createpost from '../components/Createpost';
import Events from '../components/Events';
import Postview from '../components/Postview';
import Load from '../components/Load';
import { getUserById } from "../api/patient";

class Userpage extends Component {

    constructor(props){
        super(props)
        this.props = props
        this.state = {
            user: {},
            loading: true
        }
    }

    componentDidMount() {
        getUserById(2)
        .then((response) => {
            this.setState({ user: response })
            console.dir(this.state.user)
        }).catch(error => {
            console.error(error)
        })
    }


    render() {
        
        return (
            <Fragment> 
                <Header />
                <Leftnav />
                <Rightchat />
                <div className="main-content right-chat-active">
                    <div className="middle-sidebar-bottom">
                        <div className="middle-sidebar-left pe-0">
                            <div className="row">
                                <div className="col-xl-12 mb-3">
                                    <ProfilecardThree user={this.state.user} />
                                </div>
                                <div className="col-xl-12 col-xxl-3 col-lg-4 pe-0">
                                    <Profiledetail user={this.state.user} />
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

export default Userpage;