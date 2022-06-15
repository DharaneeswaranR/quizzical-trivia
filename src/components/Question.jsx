import { nanoid } from "nanoid";
import { useState } from "react";

export default function Question(props) {
    const [selected, setSelected] = useState("")
    const { question, options } = props.data

    const style = {
        backGround: selected ? "#D6DBF5" : "#F5F7FB",
        cursor: "pointer"
    }

    function clicked() {
        console.log("clicked")
    }

    const optionElements = options.map(option => 
        <span
            className="answer-options"
            style={style} 
            key={nanoid()}
            onClick={clicked}>
            {option}
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