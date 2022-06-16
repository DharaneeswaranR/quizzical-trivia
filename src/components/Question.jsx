import { nanoid } from "nanoid";
import { useState } from "react";

export default function Question(props) {
    const [selected, setSelected] = useState("")
    const { question, options, correct_answer } = props.data

    function selectOption(option) {
        setSelected(option)
    }

    function getClassName(option) {
        if (props.showAnswers) {
            if (option === correct_answer) {
                return "correct"
            } else {
                if (option === selected) {
                    return "incorrect"
                }
            }
        } else {
            if (selected === option) {
                return "selected"
            } else {
                return ""
            }
        }
    }

    const optionElements = options.map(option => 
        <span
            className={`answer-options ${getClassName(option)}`}
            key={nanoid()}
            onClick={() => selectOption(option)}
            dangerouslySetInnerHTML={{__html: option}}>
        </span>
    )

    return (
        <section className="question-section">
            <p dangerouslySetInnerHTML={{__html: question}}></p>
            {optionElements}
            <hr />
        </section>
    )
}