import { useState, useEffect, useRef } from "react";
import { nanoid } from "nanoid";

export default function Question(props) {
    const [selected, setSelected] = useState("")
    const alreadySelectedCorrect = useRef(false)

    const { question, options, correct_answer } = props.data 
    const { addScore, decScore } = props


    useEffect(() => {
        if (!alreadySelectedCorrect.current && selected === correct_answer) {
            addScore()
            alreadySelectedCorrect.current = true
        }

        if (alreadySelectedCorrect.current && selected !== correct_answer) {
            decScore()
            alreadySelectedCorrect.current = false
        }
 
    }, [selected]) // eslint-disable-line 

    function selectOption(option) {
        if (!props.showAnswers) {
            setSelected(option)
        }
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