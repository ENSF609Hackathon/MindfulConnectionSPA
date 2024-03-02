import React from 'react'
import SelectFrequency from './SelectFrequency'
import SelectDisruptiveness from './SelectDisruptiveness'

function QuestionCardCMAI(props) {

    return(
        <div className="card">
            <div className="card-body">
                <h6 className="card-title">{props.id}</h6>
                <p className="card-text">{props.prompt}</p>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <SelectFrequency id={props.id + 'F'} setRating={props.setRating}/>
                        </div>
                        <div className="col">
                            <SelectDisruptiveness id={props.id + 'D'} setRating={props.setRating}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestionCardCMAI