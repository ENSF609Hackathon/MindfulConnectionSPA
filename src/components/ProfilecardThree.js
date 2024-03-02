import React,{Component} from 'react';

class ProfilecardThree extends Component {

    render() {

        
        const { user } = this.props
        console.log(window.location.pathname)

        return (
            <div className="card w-100 border-0 p-0 bg-white shadow-xss rounded-xxl">
                <div className="card-body h250 p-0 rounded-xxl overflow-hidden m-3"><img width="1200" height="250" src={`${process.env.PUBLIC_URL}/assets/images/profile/background.png`} alt="avater" /></div>
                <div className="card-body p-0 position-relative">
                    <figure className="avatar position-absolute w100 z-index-1" style={{top:'-40px',left:'30px'}}><img src={`${process.env.PUBLIC_URL}/assets/images/profile/${user.photoPath}`} alt="avater" className="float-right p-1 bg-white rounded-circle w-100" /></figure>
                    <h4 className="fw-700 font-sm mt-2 mb-lg-5 mb-4 pl-15">{user.name} <span className="fw-500 font-xssss text-grey-500 mt-1 d-block">DOB: {user.dob}</span> <span className="fw-500 font-xssss text-grey-500 mt-1 mb-3 d-block">Healthcare #: {user.healthNumber}</span></h4>
                    <div className="d-flex align-items-center justify-content-center position-absolute-md right-15 top-0 me-2">
                        <a href="/defaultemailbox" className="d-none d-lg-block bg-greylight btn-round-lg ms-2 rounded-3 text-grey-700"><i className="feather-mail font-md"></i></a>
                    </div>
                </div>

                <div className="card-body d-block w-100 shadow-none mb-0 p-0 border-top-xs">
                    
                    <ul className="nav nav-tabs d-flex product-info-tab border-bottom-0 ps-4" id="pills-tab" role="tablist">
                        <li className="active list-inline-item me-5"><a className="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block" href="/memorymood" data-toggle="tab">Memory/Mood</a></li>
                        <li className="list-inline-item me-5"><a className="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block" href="#navtabs2" data-toggle="tab">Medications</a></li>
                        <li className="list-inline-item me-5"><a className="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block" href="#navtabs3" data-toggle="tab">Mobility</a></li>
                        <li className="list-inline-item me-5"><a className="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block" href="#navtabs4" data-toggle="tab">Wellness</a></li>
                        <li className="list-inline-item me-5"><a className="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block" href="#navtabs3" data-toggle="tab">I Matter</a></li>
                        <li className="list-inline-item me-5"><a className="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block" href="#navtabs1" data-toggle="tab">I need Support</a></li>
                    </ul>
                    </div>
            </div>
             
        );
    }
}

export default ProfilecardThree;