import Question from "./Question"

export default function Questions(props) {
    return (
        <div>
            {props.questionsData.map(item => <Question key={item.id} data={item}/>)}
        </div>
    )
}