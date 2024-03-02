import React from 'react'
import TextFormField from './TextFormField'

function QuestionCardCPL(props) {

    return(
        <div className="card">
            <div className="card-body">
                <h6 className="card-title">{props.id}</h6>
                <p className="card-text">{props.prompt}</p>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <TextFormField
                                id={props.id}
                                placeHolder='Type your response here...'
                                setAnswer={props.setAnswer}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestionCardCPL