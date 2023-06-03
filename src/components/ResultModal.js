import { useContext } from "react"
import { quizContext } from "../contexts/quizContext"

const ResultModal = () => {
    const {
        quizState: {point, number},
        timer,
        handlePause
    } = useContext(quizContext)

    handlePause()

  return (
    <div>
      {point < number/2 ? 
      <div className="result">
        <h1>
          Completed!!
        </h1>
        <h3>
          Better luck next time!
        </h3>
        <h3>
          {point}/{number} correct answers in {timer} seconds
        </h3>
        <button onClick={() => window.location.reload(false)}>Play again!</button>
      </div> :
      <div className="result">
        <h1>
          Congratulions !!
        </h1>
        <h3>
          You are amazing!!
        </h3>
        <h3>
          {point}/{number} correct answers in {timer} seconds
        </h3>
        <button onClick={() => window.location.reload(false)}>Play again!</button>
      </div>
      }
    </div>
  )
}

export default ResultModal