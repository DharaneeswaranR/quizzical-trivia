import { useState } from "react"
import Question from "./Question"

export default function Quiz(props) {
    const [checkAnswers, setCheckAnswers] = useState(false)
    const [score, setScore] = useState(0)

    function addScore() {
        setScore(prevScore => ++prevScore)
    }

    function handleClick() {
        if (checkAnswers) {
            props.getQuestions()
            setCheckAnswers(false)
            setScore(0)
        } else {
            setCheckAnswers(true)
        }
    }

    const questionElements = props.questionsData.map(item => 
        <Question 
            key={item.id} 
            data={item} 
            showAnswers={checkAnswers}
            setScore={addScore}
        />
    )

    return (
        <div className="quiz-section">
            {questionElements}
            <div className="btn-container">
                {checkAnswers && <p>You scored {score}/5 correct answers</p>}
                <button 
                    className="check-btn" 
                    onClick={handleClick}
                >
                    {checkAnswers ? "Play again" : "Check answers"}
                </button>
            </div>
        </div>
    )
}