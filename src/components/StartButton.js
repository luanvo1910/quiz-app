import { useContext } from "react"
import { quizContext } from "../contexts/quizContext"

const StartButton = () => {
    const {
        getQuestions,
        handleStart,
        setIsLoading
    } = useContext(quizContext)

    const start = e => {
        getQuestions()
        handleStart()
        setIsLoading(true)
    }

  return (
    <div className="display">
        <h1>
            Start quiz
        </h1>
        <button 
            onClick={start}
        >
            Start
        </button>  
    </div>
  )
}

export default StartButton