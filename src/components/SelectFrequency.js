import React from "react"
import {useState} from 'react'

function SelectFrequency(props){

    const [selectedRating, setSelectedRating] = useState('')

    const setFrequency = (question, value) => {
        setSelectedRating(value)
        props.setRating(question, value)
    }

    return (
        <div className="container">
            <div className="row">
                <label htmlFor={props.id}>Frequency
                    <select className="form-select" id={props.id} value={selectedRating} onChange={e => setFrequency(props.id, e.target.value)}>
                        <option value=''>Rating</option>
                        <option value='1'>Never</option>
                        <option value='2'>Less than once a week</option>
                        <option value='3'>1-2 times a week</option>
                        <option value='4'>Several times a week</option>
                        <option value='5'>1-2 times a day</option>
                        <option value='6'>Several times a day</option>
                        <option value='7'>Several times an hour</option>
                        <option value='9'>Don't know</option>
                    </select>
                </label>
            </div>
        </div>
    )
  }
  
  export default SelectFrequency;