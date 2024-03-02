import React, {useState} from "react";
import QuestionCardCPL from '../components/QuestionCardCPL';

function QuestionPrompList(){

    const [answers, setAnswers] = useState([])

    const setAnswer = (question, value) => {

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
                    <h2 className="card-title">Question Prompt List</h2>
                    <p>Asking questions of health care providers can sometimes be hard. Many of us simply do not know the questions we could be asking to help us better understand and plan for the future. This question prompt list has been designed to open up conversations between you, your family, and members of the health care staff in this facility. The answers to these questions may not be simple or straightforward; dementia affects each person in different ways. By asking these important questions, we hope to provide you with the information you need regarding how things might progress towards the final stages of life and help prepare you for the future.</p>
                </div>
            </div>
                <h3 className="card-title mt-3">Dementia in General</h3>
                <QuestionCardCPL id='Question 1' prompt='Can you explain the type of dementia my family member has to me?' setAnswer={setAnswer}/> 
                <QuestionCardCPL id='Question 2' prompt='Dementia affects everyone differently. Can you explain the key changes, especially changes in behaviour that I might see in my family member as their dementia progresses?' setAnswer={setAnswer}/> 
                <h3 className="card-title mt-3">Dementia towards the End of Life</h3>
                <QuestionCardCPL id='Question 3' prompt='What are some of the signs and symptoms most frequently associated with the last few weeks of life for someone with dementia?' setAnswer={setAnswer}/> 
                <QuestionCardCPL id='Question 4' prompt='What might the final days and hours of my family member look like?' setAnswer={setAnswer}/> 
                <QuestionCardCPL id='Question 5' prompt='What can I do to help in caring for my family member who is dying?' setAnswer={setAnswer}/> 
                <h3 className="card-title mt-3">Care of Person Dying with Dementia</h3>
                <h4 className="card-title ms-3 mt-1">a. Care and Comfort</h4>
                <QuestionCardCPL id='Question 6' prompt='How might your care of my family member change in his/her final days?' setAnswer={setAnswer}/> 
                <QuestionCardCPL id='Question 7' prompt='I would like to talk about how my family member would want to be cared for.' setAnswer={setAnswer}/> 
                <QuestionCardCPL id='Question 8' prompt='I would like to talk about my hopes and wishes for the care of my family member at the end of their life.' setAnswer={setAnswer}/> 
                <QuestionCardCPL id='Question 9' prompt='Can you tell me what “comfort care” means?' setAnswer={setAnswer}/> 
                <QuestionCardCPL id='Question 10' prompt='How do you balance safety and security while still keeping my family member comfortable?' setAnswer={setAnswer}/> 
                <QuestionCardCPL id='Question 11' prompt='What do I need to know about the following documents and how often do they get reviewed?' setAnswer={setAnswer}/> 
                <h4 className="card-title ms-3 mt-1">b. Pain and Symptoms</h4>
                <QuestionCardCPL id='Question 12' prompt='How might you assess and manage pain in my family member?' setAnswer={setAnswer}/> 
                <QuestionCardCPL id='Question 13' prompt='My family member is restless. What might that mean and how might it be managed?' setAnswer={setAnswer}/> 
                <QuestionCardCPL id='Question 14' prompt='My family member can no longer swallow. How might they still get their medications?' setAnswer={setAnswer}/> 
                <QuestionCardCPL id='Question 15' prompt='Are pneumonia and urinary tract infections common in those with advancing dementia and how might they be managed?' setAnswer={setAnswer}/> 
                <h4 className="card-title ms-3 mt-1">c. Food and Fluid</h4>
                <QuestionCardCPL id='Question 16' prompt='My family member is not eating or drinking much. What might this mean and is this normal?' setAnswer={setAnswer}/>
                <h4 className="card-title ms-3 mt-1">d. Hospital Transfer</h4> 
                <QuestionCardCPL id='Question 17' prompt='Under what circumstances might my family member be transferred to the hospital?' setAnswer={setAnswer}/> 
                <h4 className="card-title ms-3 mt-1">e. Interacting with my Family Member</h4>
                <QuestionCardCPL id='Question 18' prompt='What is the best way for me to respond to and interact with my family member as their health declines?' setAnswer={setAnswer}/> 
                <h3 className="card-title mt-3">Relationships with Staff (Encompasses My Role as a Decision-Maker and My Role as a Caregiver)</h3>
                <h4 className="card-title ms-3 mt-1">a. Communication</h4>
                <QuestionCardCPL id='Question 19' prompt='What is the best way for me and my family to communicate our needs, concerns, and questions to the staff?' setAnswer={setAnswer}/> 
                <QuestionCardCPL id='Question 20' prompt='What is the best way for staff to communicate with our family?' setAnswer={setAnswer}/> 
                <QuestionCardCPL id='Question 21' prompt='Members of my family and I are having a disagreement or can’t reach a decision. What help is available to help us work things out?' setAnswer={setAnswer}/> 
                <QuestionCardCPL id='Question 22' prompt='How confidential is information about my family member?' setAnswer={setAnswer}/> 
                <h4 className="card-title ms-3 mt-1">b. Supporting Us</h4>
                <QuestionCardCPL id='Question 23' prompt='What would you like to know about my family member or us as a family to provide the best care possible?' setAnswer={setAnswer}/>
                <h4 className="card-title ms-3 mt-1">c. Staff Roles and Responsibilities</h4> 
                <QuestionCardCPL id='Question 24' prompt='Tell me about the roles of different people who work in this facility?' setAnswer={setAnswer}/> 
                <h3 className="card-title mt-3">How I am Managing</h3>
                <QuestionCardCPL id='Question 25' prompt='What are the most common emotions I may go through as a caregiver?' setAnswer={setAnswer}/> 
                <QuestionCardCPL id='Question 26' prompt='Dementia can be frustrating and unpredictable. What are the emotional supports and informational resources available to help me cope?' setAnswer={setAnswer}/> 
                <QuestionCardCPL id='Question 27' prompt='When my family member dies, what happens next and what should I do?' setAnswer={setAnswer}/> 
                <h3 className="card-title mt-3">General Questions About Life in the Personal Care Home</h3>
                <QuestionCardCPL id='Question 28' prompt='Am I allowed to bring in treats and the family pet to visit?' setAnswer={setAnswer}/>
                <QuestionCardCPL id='Question 29' prompt='What steps are in place to keep my family member safe?' setAnswer={setAnswer}/> 

            <div className="container">
                <button type='button' className='btn btn-primary mt-3 ml-3'>Submit</button>
            </div>
        </div>
    )
}

export default QuestionPrompList;