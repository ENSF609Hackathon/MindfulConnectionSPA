import React,{Component} from 'react';
import { getContactByUserId } from "../api/user";

class Profiledetail extends Component {

    constructor(props){
        super(props)
        this.props = props
        this.state = {
            contacts: [{}]
        }
    }

    componentDidMount(){
        getContactByUserId(1)
        .then((response) => {
            this.setState({ contacts: response })
        }).catch(error => {
            console.error(error)
        })
    }

    displayContact = (contact) => {
        return <div>
                <div>
                        {`Name: ${contact.contactName}`}
                </div>
                <div>
                    {`Email: ${contact.email}`}
                </div>
                <div>
                    {`Number: ${contact.phoneNumber}`}
                </div>
                <div>
                    {`Relation: ${contact.relation}`} 
                </div>
               </div>
    }

    render() {

        const { user } = this.props


        return (
            <div>
                <div className="card shadow-xss rounded-xxl border-0 mb-3">
                    <div className="card-body d-block p-4">
                        <h4 className="fw-700 mb-3 font-xsss text-grey-900">About</h4>
                        <p className="fw-500 text-grey-500 lh-24 font-xssss mb-0">{user.about}</p>
                    </div>
                </div>
                <div className="card shadow-xss rounded-xxl border-0 mb-3">
                    <div className="card-body d-block p-4">
                        <h4 className="fw-700 mb-3 font-xsss text-grey-900">Goals of Care Designation</h4>
                        <p className="fw-500 text-grey-500 lh-24 font-xssss mb-0">{user.careDescription}</p>
                    </div>
                </div>
                <div className="card shadow-xss rounded-xxl border-0 mb-3">
                    <div className="card-body d-block p-4">
                        <h4 className="fw-700 mb-3 font-xsss text-grey-900">{user.name}'s Health Goals</h4>
                        <p className="fw-500 text-grey-500 lh-24 font-xssss mb-0">{user.healthGoals}</p>
                    </div>
                </div>
                <div className="card shadow-xss rounded-xxl border-0 mb-3">
                    <div className="card-body d-block p-4">
                        <h4 className="fw-700 mb-3 font-xsss text-grey-900">{user.name}'s Primary Contacts</h4>
                        <p className="fw-500 text-grey-500 lh-24 font-xssss mb-0">{
                            this.state.contacts.map((contact, index) => (
                                <div>
                                    {this.displayContact(contact)}
                                </div>
                            ))
                        }</p>
                    </div>
                </div>
                <div className="card shadow-xss rounded-xxl border-0 mb-3">
                    <div className="card-body d-block p-4">
                        <h4 className="fw-700 mb-3 font-xsss text-grey-900">Location</h4>
                        <p className="fw-500 text-grey-500 lh-24 font-xssss mb-0">{user.location}</p>
                    </div>
                </div>
                <div className="card shadow-xss rounded-xxl border-0 mb-3">
                    <div className="card-body d-block p-4">
                        <h4 className="fw-700 mb-3 font-xsss text-grey-900">Diagnoses</h4>
                        <p className="fw-500 text-grey-500 lh-24 font-xssss mb-0">{user.diagnoses}</p>
                    </div>
                </div>
                <div className="card shadow-xss rounded-xxl border-0 mb-3">
                    <div className="card-body d-block p-4">
                        <h4 className="fw-700 mb-3 font-xsss text-grey-900">Allergies</h4>
                        <p className="fw-500 text-grey-500 lh-24 font-xssss mb-0">{user.allergies}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profiledetail;