import { useState, useRef } from "react"
import Question from "./Question"

export default function Quiz(props) {
    const [checkAnswers, setCheckAnswers] = useState(false)
    const score = useRef(0)

    function addScore() {
        score.current += 1
    }

    function decScore() {
        score.current -= 1
    }

    function handleClick() {
        if (checkAnswers) {
            props.getQuestions()
            setCheckAnswers(false)
            score.current = 0
        } else {
            setCheckAnswers(true)
        }
    }

    const questionElements = props.questionsData.map(item => 
        <Question 
            key={item.id} 
            data={item} 
            showAnswers={checkAnswers}
            addScore={addScore}
            decScore={decScore}
        />
    )

    return (
        <div className="quiz-section">
            {questionElements}
            <div className="btn-container">
                {checkAnswers && <p>You scored {score.current}/5 correct answers</p>}
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