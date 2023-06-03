import { useContext } from "react"
import { quizContext } from "../contexts/quizContext"
import SingleQuestion from "./Question"


const QuizModal = () => {
    const {
        quizState: {questions},
    } = useContext(quizContext)

  return (
    <div>
        {questions.length > 0 && <SingleQuestion q={questions}/>}
    </div>
  )
}

export default QuizModal