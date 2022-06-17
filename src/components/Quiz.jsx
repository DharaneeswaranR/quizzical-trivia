import { useState } from "react"
import Question from "./Question"

export default function Quiz(props) {
    const [checkAnswers, setCheckAnswers] = useState(false)

    function handleClick() {
        if (checkAnswers) {
            props.getQuestions()
            setCheckAnswers(false)
        } else {
            setCheckAnswers(true)
        }
    }

    const questionElements = props.questionsData.map(item => 
        <Question 
            key={item.id} 
            data={item} 
            showAnswers={checkAnswers}
        />
    )

    return (
        <div className="quiz-section">
            {questionElements}
            <div className="btn-container">
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