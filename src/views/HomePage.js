import { useContext } from "react"
import { quizContext } from "../contexts/quizContext"
import QuizModal from "../components/QuizModal"
import ResultModal from "../components/ResultModal"
import StartButton from "../components/StartButton"

const HomePage = () => {
    const {
        quizState: {questions, number},
        isLoading,
    } = useContext(quizContext)

  return (
    <>
        {isLoading === true && questions.length === 0 &&
            <div>
                <div className="loader"></div>
                <h3>Loading questions...</h3>
            </div>
        }
        {isLoading === false && questions.length === 0 && <StartButton/>}
        {questions.length > 0 && number < questions.length && <QuizModal/>}
        {questions.length > 0 && number === questions.length && <ResultModal/>}
    </>
  )
}

export default HomePage
