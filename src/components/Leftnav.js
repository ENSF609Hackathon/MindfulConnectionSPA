import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0  } from '@auth0/auth0-react';



const Leftnav = (props) => {

    const { logout } = useAuth0()
    const handleLogout = () => {
        logout({ returnTo: window.location.origin });
    };




    let { navClass } = props

    if(navClass == undefined){
        navClass = ""
    }

    return (
        <div className={`navigation scroll-bar ${navClass}`}>
            <div className="container ps-0 pe-0">
                <div className="nav-content">
                    <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1 mb-2 mt-2">
                        <div className="nav-caption fw-600 font-xssss text-grey-500"><span>New </span>Feeds</div>
                        <ul className="mb-1 top-content">
                            <li className="logo d-none d-xl-block d-lg-block"></li>
                            <li><Link to="/" className="nav-content-bttn open-font"><i className="feather-home btn-round-md bg-blue-gradiant me-3"></i><span>Home</span></Link></li>
                            <li><Link to="/forum" className="nav-content-bttn open-font"><i className="feather-credit-card btn-round-md bg-blue-gradiant me-3"></i><span>Forum</span></Link></li>
                            <li><Link to="/caring" className="nav-content-bttn open-font"><i className="feather-user btn-round-md bg-red-gradiant me-3"></i><span>Patients</span></Link></li>
                            {/* <li><Link to="/defaultstorie" className="nav-content-bttn open-font"><i className="feather-globe btn-round-md bg-gold-gradiant me-3"></i><span>Explore Stories</span></Link></li>
                            <li><Link to="/defaultgroup" className="nav-content-bttn open-font"><i className="feather-zap btn-round-md bg-mini-gradiant me-3"></i><span>Popular Groups</span></Link></li>
                            <li><Link to="/userpage" className="nav-content-bttn open-font"><i className="feather-user btn-round-md bg-primary-gradiant me-3"></i><span>Author Profile </span></Link></li>                         */}
                        </ul>
                    </div>

                    <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1 mb-2">
                        <div className="nav-caption fw-600 font-xssss text-grey-500"><span>More </span>Pages</div>
                        <ul className="mb-3">
                            <li><Link to="/defaultemailbox" className="nav-content-bttn open-font"><i className="font-xl text-current feather-inbox me-3"></i><span>Messages</span><span className="circle-count bg-warning mt-1">5</span></Link></li>
                            <li><Link to="/caring" className="nav-content-bttn open-font"><i className="font-xl text-current feather-home me-3"></i><span>Facilities</span></Link></li>
                        </ul>
                    </div>

                    <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1">
                        <div className="nav-caption fw-600 font-xssss text-grey-500"><span></span> Account</div>
                        <ul className="mb-1">
                            <li className="logo d-none d-xl-block d-lg-block"></li>
                            <li><Link to="/settings" className="nav-content-bttn open-font h-auto pt-2 pb-2"><i className="font-sm feather-settings me-3 text-grey-500"></i><span>Settings</span></Link></li>
                            <li><Link to="/defaultanalytics" className="nav-content-bttn open-font h-auto pt-2 pb-2"><i className="font-sm feather-pie-chart me-3 text-grey-500"></i><span>Analytics</span></Link></li>
                            <li><a href="#" onClick={handleLogout} className="nav-content-bttn open-font h-auto pt-2 pb-2"><i className="font-sm feather-log-out me-3 text-grey-500"></i><span>Logout</span></a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );

}

export default Leftnav;