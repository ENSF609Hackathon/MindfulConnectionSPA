import React,{Component} from 'react';
import { Link } from 'react-router-dom';

class Appfooter extends Component {
    render() {
        return (
            <div className="app-footer border-0 shadow-lg bg-primary-gradiant">
                
                <Link to="/defaultvideo" className="nav-content-bttn"><i className="feather-help-circle"></i></Link>   
                <Link to="/home" className="nav-content-bttn nav-center"><i className="feather-home"></i></Link>      
                <Link to="/defaultlive" className="nav-content-bttn" data-tab="chats"><i className="feather-message-circle"></i></Link>  
                {/* <Link to="/shop2" className="nav-content-bttn"><i className="feather-layers"></i></Link> */}
                {/* <Link to="/logout" className="nav-content-bttn"><i className="feather-log-out"/></Link> */}
                {/* <Link to="/defaultsettings" className="nav-content-bttn"><img src="assets/images/female-profile.png" alt="user" className="w30 shadow-xss" /></Link> */}
            </div>        
        );
    }
}

export default Appfooter;