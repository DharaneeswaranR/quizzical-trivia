import { nanoid } from "nanoid";

export default function Question(props) {
    const { question, options } = props.data

    return (
        <section>
            <p dangerouslySetInnerHTML={{__html: question}}></p>
            {options.map(option => <span key={nanoid()}>{option}</span>)}
        </section>
    )
}