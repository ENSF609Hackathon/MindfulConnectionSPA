import React,{Component} from 'react';
import { Link , NavLink } from 'react-router-dom';
import logo from '../assets/Logo.jpg'

import Darkbutton from '../components/Darkbutton';
import Leftnav from './Leftnav';
import { useAuth0  } from '@auth0/auth0-react';

class Header extends Component {
    state = {
        isOpen: false,
        isActive: false,
        isNoti: false
    };

    toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });
    toggleActive = () => this.setState({ isActive: !this.state.isActive });
    toggleisNoti = () => this.setState({ isNoti: !this.state.isNoti });

    render() {
        const navClass = `${this.state.isOpen ? " nav-active" : ""}`;
        const buttonClass = `${this.state.isOpen ? " active" : ""}`;
        const searchClass = `${this.state.isActive ? " show" : ""}`;
        const notiClass = `${this.state.isNoti ? " show" : ""}`;

        return (
            <div className="nav-header bg-white shadow-xs border-0">
                <div className="nav-top">
                    <Link to="/"><img alt={"Logo"} style={{width: '120px', height: 'auto'}} src={logo}/></Link>
                    {/* <Link to="/defaultmessage" className="mob-menu ms-auto me-2 chat-active-btn"><i className="feather-message-circle text-grey-900 font-sm btn-round-md bg-greylight"></i></Link> */}
                    {/* <Link to="/defaultvideo" className="mob-menu me-2"><i className="feather-video text-grey-900 font-sm btn-round-md bg-greylight"></i></Link> */}
                    <span onClick={this.toggleActive} className="me-2 ms-auto menu-search-icon mob-menu"><i className="feather-search text-grey-900 font-sm btn-round-md bg-greylight"></i></span>
                    <button onClick={this.toggleOpen} className={`nav-menu me-0 ms-2 ${buttonClass}`}></button>
                </div>
                
                {/*<form action="#" className="float-left header-search ms-3">*/}
                {/*    <div className="form-group mb-0 icon-input">*/}
                {/*        <i className="feather-search font-sm text-grey-400"></i>*/}
                {/*        <input type="text" placeholder="Start typing to search.." className="bg-grey border-0 lh-32 pt-2 pb-2 ps-5 pe-3 font-xssss fw-500 rounded-xl w350 theme-dark-bg" />*/}
                {/*    </div>*/}
                {/*</form>*/}
                {/*<NavLink activeClassName="active" to="/" className="p-2 text-center ms-3 menu-icon center-menu-icon"><i className="feather-home font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500 "></i></NavLink>*/}
                {/* <NavLink activeClassName="active" to="/defaultstorie" className="p-2 text-center ms-0 menu-icon center-menu-icon"><i className="feather-zap font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500 "></i></NavLink> */}
                {/*<NavLink activeClassName="active" to="/defaultvideo" className="p-2 text-center ms-0 menu-icon center-menu-icon"><i className="feather-video font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500 "></i></NavLink>*/}
                {/*<NavLink activeClassName="active" to="/defaultgroup" className="p-2 text-center ms-0 menu-icon center-menu-icon"><i className="feather-user font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500 "></i></NavLink>*/}
                {/* <NavLink activeClassName="active" to="/shop2" className="p-2 text-center ms-0 menu-icon center-menu-icon"><i className="feather-shopping-bag font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500 "></i></NavLink> */}

                    
                <span className={`p-2 pointer text-center ms-auto menu-icon ${notiClass}`} id="dropdownMenu3" data-bs-toggle="dropdown" aria-expanded="false" onClick={this.toggleisNoti}><span className="dot-count bg-warning"></span><i className="feather-bell font-xl text-current"></i></span>
                <div className={`dropdown-menu p-4 right-0 rounded-xxl border-0 shadow-lg ${notiClass}`} aria-labelledby="dropdownMenu3">
                    <h4 className="fw-700 font-xss mb-4">Notification</h4>
                    <div className="card bg-transparent-card w-100 border-0 ps-5 mb-3">
                        <img src="assets/images/user.png" alt="user" className="w40 position-absolute left-0" />
                        <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">Mindful Connections <span className="text-grey-400 font-xsssss fw-600 float-right mt-1"> 3 min</span></h5>
                        <h6 className="text-grey-500 fw-500 font-xssss lh-4">Check in for your wellness check.</h6>
                    </div>
                    <div className="card bg-transparent-card w-100 border-0 ps-5 mb-3">
                        <img src="assets/images/user.png" alt="user" className="w40 position-absolute left-0" />
                        <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">Caregiver 1 <span className="text-grey-400 font-xsssss fw-600 float-right mt-1"> 2 min</span></h5>
                        <h6 className="text-grey-500 fw-500 font-xssss lh-4">Your appointment with your healthcare provider is coming up. </h6>
                    </div>

                    <div className="card bg-transparent-card w-100 border-0 ps-5 mb-3">
                        <img src="assets/images/user.png" alt="user" className="w40 position-absolute left-0" />
                        <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">Reminders<span className="text-grey-400 font-xsssss fw-600 float-right mt-1"> 1 min</span></h5>
                        <h6 className="text-grey-500 fw-500 font-xssss lh-4">Reminder to check in with your family. </h6>
                    </div>
                    <div className="card bg-transparent-card w-100 border-0 ps-5">
                        <img src="assets/images/user.png" alt="user" className="w40 position-absolute left-0" />
                        <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">Message <span className="text-grey-400 font-xsssss fw-600 float-right mt-1"> 30 sec</span></h5>
                        <h6 className="text-grey-500 fw-500 font-xssss lh-4">You have a new message from another memeber</h6>
                    </div>
                </div>
                <Link to="/defaultmessage" className="p-2 text-center ms-3 menu-icon chat-active-btn"><i className="feather-message-square font-xl text-current"></i></Link>
                <Darkbutton />
                <Link to="/settings" className="p-0 ms-3 menu-icon"><img src="assets/images/user.png" alt="user" className="w40 mt--1" /></Link>

                <Leftnav navClass={navClass}/>
                
                {/*<div className={`app-header-search ${searchClass}`}>*/}
                {/*    <form className="search-form">*/}
                {/*        <div className="form-group searchbox mb-0 border-0 p-1">*/}
                {/*            <input type="text" className="form-control border-0" placeholder="Search..." />*/}
                {/*            <i className="input-icon">*/}
                {/*                <ion-icon name="search-outline" role="img" className="md hydrated" aria-label="search outline"></ion-icon>*/}
                {/*            </i>*/}
                {/*            <span className="ms-1 mt-1 d-inline-block close searchbox-close">*/}
                {/*                <i className="ti-close font-xs" onClick={this.toggleActive}></i>*/}
                {/*            </span>*/}
                {/*        </div>*/}
                {/*    </form>*/}
                {/*</div>*/}
                
            </div>
        );
    }
}

export default Header;