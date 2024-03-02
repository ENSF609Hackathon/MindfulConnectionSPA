import React from 'react';


function OldDiaryEntry(props) {

        return (
            <div className="card w-100 shadow-xss rounded-xxl border-0 p-4 mb-3">
                <div className="card-body p-0 d-flex">
                    <h4 className="fw-700 text-grey-900 font-xssss mt-1"> {props.time}</h4>
                    <div className="ms-auto pointer"><i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss"></i></div>
                    
                </div>
                <div className="card-body p-0 me-lg-5">
                    <p className="fw-500 text-grey-500 lh-26 font-xssss w-100 mb-2">{props.des}</p>
                </div>
            </div>
        );
}

export default OldDiaryEntry;