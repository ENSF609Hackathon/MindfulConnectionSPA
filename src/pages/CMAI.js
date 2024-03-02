import React, {useState} from "react";
import QuestionCardCMAI from '../components/QuestionCardCMAI';
import { Link } from 'react-router-dom';

function CMAI(){
    // I need props.userID
    const [answers, setAnswers] = useState([])

    const setRating = (question, value) => {

        let filtered = answers.filter(function (value) {
            return value.questionID !== question
        })

        const newAnswer = {
            questionID: question,
            answerValue: value
        }; 

        setAnswers([...filtered, newAnswer])
        console.log([...filtered, newAnswer])
    }

    const submitForm = (e) => {

        let q1d = answers.find(o=> o.questionID === "Question 1D")
        console.log(q1d);
        let q1f = answers.find(o=> o.questionID === "Question 1F")
        console.log(q1f);
            if((typeof(q1d) !== 'undefined') && (typeof(q1f) !== 'undefined')){
                fetch('https://mindfulconnectionapi.azurewebsites.net/api/CMAI/CMAIForm/', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                // patientID = props.userID
                body: JSON.stringify({"patientId": 1, "q1d": q1d.answerValue, "q1f": q1f.answerValue})
            })  
        }      
    }

    return (
        <div className="container mt-3">
            <div className="card">
                <div className="card-body"> 
                    <h2 className="card-title">Cohen-Mansfield Agitation Inventory - Disruptive</h2>
                    <p>Please read each of the agitated behaviors, and rate the frequency and disruptiveness of each during the past two weeks.</p>
                    <p><strong><u>Disruptiveness:</u></strong><em>   How disturbing it is to staff, other residents, or family members.</em></p>
                    <p>Rate the highest it is for any of those it disrupts.</p>
                </div>
            </div>
            <QuestionCardCMAI id='Question 1' prompt='Pacing (aimless wandering)' setRating={setRating}/> 
            <QuestionCardCMAI id='Question 2' prompt='Inappropriate dress (disrobing)' setRating={setRating}/>
            <QuestionCardCMAI id='Question 3' prompt='Spitting (including at meals)' setRating={setRating}/>
            <QuestionCardCMAI id='Question 4' prompt='Cursing or verbal aggression' setRating={setRating}/>
            <QuestionCardCMAI id='Question 5' prompt='Constant unwarranted request for attention or help' setRating={setRating}/>
            <QuestionCardCMAI id='Question 6' prompt='Repetitive sentences or questions' setRating={setRating}/>
            <QuestionCardCMAI id='Question 7' prompt='Hitting (including self)' setRating={setRating}/>
            <QuestionCardCMAI id='Question 8' prompt='Kicking' setRating={setRating}/>
            <QuestionCardCMAI id='Question 9' prompt='Grabbing onto people' setRating={setRating}/>
            <QuestionCardCMAI id='Question 10' prompt='Pushing' setRating={setRating}/>
            <QuestionCardCMAI id='Question 11' prompt='Throwing things' setRating={setRating}/>
            <QuestionCardCMAI id='Question 12' prompt='Strange noises (weird laughter or crying)' setRating={setRating}/>
            <QuestionCardCMAI id='Question 13' prompt='Screaming' setRating={setRating}/>
            <QuestionCardCMAI id='Question 14' prompt='Biting' setRating={setRating}/>
            <QuestionCardCMAI id='Question 15' prompt='Scratching' setRating={setRating}/>
            <QuestionCardCMAI id='Question 16' prompt='Trying to get to a different place (out of the room or building)' setRating={setRating}/>
            <QuestionCardCMAI id='Question 17' prompt='Intentional falling' setRating={setRating}/>
            <QuestionCardCMAI id='Question 18' prompt='Complaining' setRating={setRating}/>
            <QuestionCardCMAI id='Question 19' prompt='Negativism' setRating={setRating}/>
            <QuestionCardCMAI id='Question 20' prompt='Eating/drinking inappropriate substances' setRating={setRating}/>
            <QuestionCardCMAI id='Question 21' prompt='Hurt self or others (cigarettes, hot water, etc)' setRating={setRating}/>
            <QuestionCardCMAI id='Question 22' prompt='Handling things inappropriately' setRating={setRating}/>
            <QuestionCardCMAI id='Question 23' prompt='Hiding things' setRating={setRating}/>
            <QuestionCardCMAI id='Question 24' prompt='Hoarding things' setRating={setRating}/>
            <QuestionCardCMAI id='Question 25' prompt='Tearing or destroying things' setRating={setRating}/>
            <QuestionCardCMAI id='Question 26' prompt='Performing repetitious mannerisms' setRating={setRating}/>
            <QuestionCardCMAI id='Question 27' prompt='Making verbal sexual advances' setRating={setRating}/>
            <QuestionCardCMAI id='Question 28' prompt='Making physical sexual advances' setRating={setRating}/>
            <QuestionCardCMAI id='Question 29' prompt='General Restlessness' setRating={setRating}/>
            <div className="container">
                <button type='button' className='btn btn-primary mt-3 ml-3' onClick={submitForm}><Link to='/userpage/1'>Submit</Link></button>
            </div>
        </div>
    )
}

export default CMAI;