import React, {useState} from 'react';

function TextFormField(props) {

    const [response, setResponse] = useState("")

    const setAnswer = (question, value) => {
        setResponse(value)
        props.setAnswer(question, value)
    }

    return (
        <div className="card-body p-3 position-relative">
            <textarea htmlFor={props.id} name="textField" 
                className="h100 bor-0 w-100 rounded-xxl p-2 ps-3 font-xsss fw-500 border-light-md theme-dark-bg" 
                cols="30" 
                rows="10" 
                placeholder={props.placeHolder} 
                value={response}
                onChange={e => setAnswer(props.id, e.target.value)}
            ></textarea>
        </div>
    );
}

export default TextFormField;