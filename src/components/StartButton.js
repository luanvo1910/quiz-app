import { useContext } from "react"
import { quizContext } from "../contexts/quizContext"

const StartButton = () => {
    const {
        getQuestions,
        setShowModal,
        handleStart
    } = useContext(quizContext)

    const start = e => {
        getQuestions()
        setShowModal(true)
        handleStart()
    }

  return (
    <div>
        <p>
        Start quiz
            <button onClick={start}>
                Start
            </button>
        </p>
    </div>
  )
}

export default StartButton