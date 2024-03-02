import React,{Component} from 'react';



class Message extends Component {
    constructor(props){
        super(props);
        this.messageOutgoing = props.messageOutgoing;
        this.name=  props.name;
        this.time = props.time;
        this.message= props.message;
    }


    render() {
        return (
        <div className={`message-item ${this.messageOutgoing ? 'outgoing-message' : 'incoming-message'}`}>
            <div className="message-user">
                <figure className="avatar">
                    <img src="assets/images/user.png" alt="avater" />
                </figure>
                <div>
                    <h5>{this.name}</h5>
                    <div className="time">{this.time.toLocaleString()}<i className="ti-double-check text-info"></i></div>
                </div>
            </div>
            <div className="message-wrap">{this.message}</div>
        </div>
        );
    }
}

export default Message;