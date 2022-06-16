import { useState } from "react"
import Question from "./Question"

export default function Quiz(props) {
    const [checkAnswers, setCheckAnswers] = useState(false)

    return (
        <div className="quiz-section">
            {props.questionsData.map(item => <Question key={item.id} data={item} showAnswers={checkAnswers}/>)}
            <button className="check-btn" onClick={() => setCheckAnswers(true)}>Check Answers</button>
        </div>
    )
}