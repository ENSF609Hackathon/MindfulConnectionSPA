import React, {useState} from "react";
import QuestionCardBurnout from '../components/QuestionCardBurnout'
function Burnout(){

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

    return (
        <div className="container mt-3">
            <div className="card">
                <div className="card-body"> 
                    <h2 className="card-title">Copenhagen Burnout Inventory</h2>
                </div>
        
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Personal Burnout</h5>
                        <p><em>A state of prolonged physical and psychological exhaustion.</em></p>
                        <QuestionCardBurnout id='P1' prompt='How often do you feel tired' type='Freq' setRating={setRating}/>
                        <QuestionCardBurnout id='P2' prompt='How often are you physically exhausted?' type='Freq' setRating={setRating}/>
                        <QuestionCardBurnout id='P3' prompt='How often are you emotionally exhausted?' type='Freq' setRating={setRating}/>
                        <QuestionCardBurnout id='P4' prompt='How often do you think "I cant take it anymore?"' type='Freq' setRating={setRating}/>
                        <QuestionCardBurnout id='P5' prompt='How often do you feel worn out?' type='Freq' setRating={setRating}/>
                        <QuestionCardBurnout id='P6' prompt='How often do you feel weak and susceptible to illness?' type='Freq' setRating={setRating}/>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Work-Related Burnout</h5>
                        <p><em>A state of prolonged physical and psychological exhaustion, which is perceived as related to the persons work.</em></p>
                        <QuestionCardBurnout id='W1' prompt='Do you feel worn out at the end of the working day?' type='Freq' setRating={setRating}/>
                        <QuestionCardBurnout id='W2' prompt='Are you exhausted in the morning at the thought of another day of work?' type='Freq' setRating={setRating}/>
                        <QuestionCardBurnout id='W3' prompt='Do you feel that every working hour is tiring for you?' type='Freq' setRating={setRating}/>
                        <QuestionCardBurnout id='W4' prompt='Do you have enough energy for family and friends during leisure time?' type='Freq' setRating={setRating}/>
                        <QuestionCardBurnout id='W5' prompt='Is your work emotionally exhausting?' type='Deg' setRating={setRating}/>
                        <QuestionCardBurnout id='W6' prompt='Does your work frustrate you?' type='Deg' setRating={setRating}/>
                        <QuestionCardBurnout id='W7' prompt='Do you feel burnt out because of your work?' type='Deg' setRating={setRating}/>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Client-Related Burnout</h5>
                        <p><em>A state of prolonged physical and psychological exhaustion, which is perceived as related to the persons work with clients.</em></p>
                        <QuestionCardBurnout id='C1' prompt='Do you find it hard to work with clients?' type='Deg' setRating={setRating}/>
                        <QuestionCardBurnout id='C2' prompt='Do you find it frustrating to work with clients?' type='Deg' setRating={setRating}/>
                        <QuestionCardBurnout id='C3' prompt='Does it drain your energy to work with clients?' type='Deg' setRating={setRating}/>
                        <QuestionCardBurnout id='C4' prompt='Do you feel that you give more than you get back when you work with clients?' type='Deg' setRating={setRating}/>
                        <QuestionCardBurnout id='C5' prompt='Are you tired of working with clients?' type='Freq' setRating={setRating}/>
                        <QuestionCardBurnout id='C6' prompt='Do you wonder how long you will be able to continue working with clients?' type='Freq' setRating={setRating}/>
                    </div>
                </div>

                <div className="container">
                    <button type='button' className='btn btn-primary mt-3 ml-3'>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Burnout;