export default function Intro(props) {
    return (
        <div className="intro">
            <h1>Quizzical</h1>
            <p>Some random discription</p>
            <button onClick={props.startQuiz}>Start Quiz</button>
        </div>
    )
}