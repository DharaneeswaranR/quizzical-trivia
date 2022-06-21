import { useState } from 'react'
import { nanoid } from 'nanoid'
import Intro from './components/Intro'
import Quiz from './components/Quiz'
import './index.css'

function App() {
    const [questions, setQuestions] = useState([])
    const [isPlaying, setIsPlaying] = useState(false)

    async function getQuestions() {
        try {
            const res = await fetch("https://opentdb.com/api.php?amount=5")
            const data = await res.json()

            const questionsData = data.results.map(item => {
                return {
                    id: nanoid(),
                    question: item.question,
                    options: shuffle([...item.incorrect_answers, item.correct_answer]),
                    correct_answer: item.correct_answer
                }
            })

            setQuestions(questionsData)
            setIsPlaying(true)

        } catch (error) {
            console.log(error)
        }
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
            {isPlaying ? 
                <Quiz questionsData={questions} getQuestions={getQuestions}/> :
                <Intro startQuiz={getQuestions}/>
            }
        </main>
    )
}

export default App
