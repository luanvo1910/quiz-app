import { useContext, useEffect } from "react"
import { quizContext } from "../contexts/quizContext"

const ResultModal = () => {
    const {
        quizState: {point},
        timer,
        handlePause
    } = useContext(quizContext)

    handlePause()
    
  return (
    <div>
      <h1>point: {point}</h1>
      <h2>time: {timer}</h2>
    </div>
  )
}

export default ResultModal