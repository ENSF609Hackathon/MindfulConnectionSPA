import React,{Component} from 'react';
import { Link } from 'react-router-dom';

class Appfooter extends Component {
    render() {
        return (
            <div className="app-footer border-0 shadow-lg bg-primary-gradiant">
                
                <Link to="/knowledge" className="nav-content-bttn"><i className="feather-help-circle"></i></Link>   
                <Link to="/" className="nav-content-bttn nav-center"><i className="feather-home"></i></Link>      
                <Link to="/defaultemailbox" className="nav-content-bttn" data-tab="chats"><i className="feather-message-circle"></i></Link>
            </div>        
        );
    }
}

export default Appfooter;