import { useContext } from "react"
import { quizContext } from "../contexts/quizContext"
import QuizModal from "../components/QuizModal"
import ResultModal from "../components/ResultModal"
import StartButton from "../components/StartButton"

const HomePage = () => {
    const {
        quizState: {questions, number}
    } = useContext(quizContext)

  return (
    <>
        {questions.length === 0 && <StartButton/>}
        {questions.length > 0 && number < questions.length && <QuizModal/>}
        {questions.length > 0 && number === questions.length && <ResultModal/>}
    </>
  )
}

export default HomePage
