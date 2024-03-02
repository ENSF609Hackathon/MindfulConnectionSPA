import React from "react"
import {useState} from 'react'

function SelectDisruptiveness(props){
   
    const [selectedRating, setSelectedRating] = useState('')

    const setDisruptiveness = (question, value) => {
        setSelectedRating(value)
        props.setRating(question, value)
    }

    return (
        <div className="container">
            <div className="row">
                <label htmlFor={props.id}>Disruptiveness
                    <select className="form-select" id={props.id} value={selectedRating} onChange={e => setDisruptiveness(props.id, e.target.value)}>
                        <option value=''>Rating</option>
                        <option value='1'>Not at all</option>
                        <option value='2'>A little</option>
                        <option value='3'>Moderately</option>
                        <option value='4'>Very Much</option>
                        <option value='5'>Extremely</option>
                        <option value='9'>Don't know</option>
                    </select>
                </label>
            </div>
        </div>
    )
  }
  
  export default SelectDisruptiveness