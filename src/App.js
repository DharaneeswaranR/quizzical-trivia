import { useState } from 'react'
import { nanoid } from 'nanoid'
import Intro from './components/Intro'
import Questions from './components/Questions'
import './App.css'

function App() {
    const [questions, setQuestions] = useState([])
    const [isPlaying, setIsPlaying] = useState(false)

    async function getQuestions() {
        const res = await fetch("https://opentdb.com/api.php?amount=2")
        const data = await res.json()

        const questionsData = data.results.map(item => {
            return {
                id: nanoid(),
                question: item.question,
                options: shuffle([...item.incorrect_answers, item.correct_answer]),
                correct_answer: item.correct_answer
            }
        })

        console.log(questionsData)
        setQuestions(questionsData)
        setIsPlaying(true)
    }

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
    
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex--
        
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
        }
      
        return array
    }

    return (
        <main>
            {!isPlaying && <Intro startQuiz={getQuestions}/>}
            {isPlaying && <Questions questionsData={questions}/>}
        </main>
    )
}

export default App
