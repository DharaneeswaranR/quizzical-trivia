export default function Intro(props) {
    return (
        <div className="intro">
            <h1>Quizzical</h1>
            <p>Take a quiz from a random topic</p>
            <button onClick={props.startQuiz}>Start Quiz</button>
        </div>
    )
}