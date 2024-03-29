import {Link} from "react-router-dom";
import React from "react";

const Residences = () => {
    return(
        <div className="row feed-body">
            <div className="col-lg-12">
                <div className="mt-4 mb-4 font-xxl fw-700 mont-font mb-4 ">Residence List</div>
                <div className="nav-caption fw-600 font-xss mb-4">Cottage 1/Home</div>
                <ul className="list-inline mb-4">
                    <li className="list-inline-item d-block border-bottom me-0"><Link
                        to="/userpage/1" className="pt-2 pb-2 d-flex align-items-center"><i
                        className="btn-round-md bg-primary-gradiant text-white feather-home font-md me-3"></i>
                        <h4 className="fw-600 font-xsss mb-0 mt-0">John Doe</h4><i
                            className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i></Link>
                    </li>
                    <li className="list-inline-item d-block border-bottom me-0"><Link
                        to="/userpage/2" className="pt-2 pb-2 d-flex align-items-center"><i
                        className="btn-round-md bg-gold-gradiant text-white feather-map-pin font-md me-3"></i>
                        <h4 className="fw-600 font-xsss mb-0 mt-0">Jane Hass</h4><i
                            className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i></Link>
                    </li>
                </ul>
                <div className="nav-caption fw-600 font-xss mb-4">Cottage 2</div>
                <ul className="list-inline mb-4">
                    <li className="list-inline-item d-block border-bottom me-0"><Link
                        to="/userpage/3" className="pt-2 pb-2 d-flex align-items-center"><i
                        className="btn-round-md bg-primary-gradiant text-white feather-home font-md me-3"></i>
                        <h4 className="fw-600 font-xsss mb-0 mt-0">Robert Doe</h4><i
                            className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i></Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Residences