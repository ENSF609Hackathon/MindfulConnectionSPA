import React from "react"
import {useState} from 'react'

function SelectBurnout(props){

    const [selectedRating, setSelectedRating] = useState('')

    const setBurnout = (question, value) => {
        setSelectedRating(value)
        props.setRating(question, value)
    }

    const labels = [['Never/almost never', 'Seldom', 'Sometimes', 'Often', 'Always'], 
                    ['To a very low degree', 'To a low degree', 'Somewhat', 'To a high degree', 'To a very high degree']];

    return (
        <div className="container">
            <div className="row">
                <label htmlFor={props.id}>{(props.type === 'Freq') ? "Frequency" : "Degree"}
                    <select className="form-select" id={props.id} value={selectedRating} onChange={e => setBurnout(props.id, e.target.value)}>
                        <option value=''>Rating</option>
                        <option value='0'>{(props.type === 'Freq') ? labels[0][0] : labels[1][0]}</option>
                        <option value='25'>{(props.type === 'Freq') ? labels[0][1] : labels[1][1]}</option>
                        <option value='50'>{(props.type === 'Freq') ? labels[0][2] : labels[1][2]}</option>
                        <option value='75'>{(props.type === 'Freq') ? labels[0][3] : labels[1][3]}</option>
                        <option value='100'>{(props.type === 'Freq') ? labels[0][4] : labels[1][4]}</option>
                    </select>
                </label>
            </div>
        </div>
    )
  }
  
  export default SelectBurnout;