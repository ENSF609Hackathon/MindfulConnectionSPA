import React from 'react'
import SelectBurnout from './SelectBurnout'

function QuestionCardBurnout(props) {

    return(
        <div className="card">
            <div className="card-body">
                <h6 className="card-title">{props.id}</h6>
                <p className="card-text">{props.prompt}</p>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <SelectBurnout id={props.id} type={props.type} setRating={props.setRating}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestionCardBurnout