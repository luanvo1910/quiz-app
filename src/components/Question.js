import { useContext, useEffect, useState } from "react"
import { quizContext } from "../contexts/quizContext"

const Question = ({q}) => {
  const {        
    quizState: {number},
    checkAnswer,
    nextQuestion
  } = useContext(quizContext)

  const [answer, setAnswer] = useState("")  
  const [currentQuestion, setCurrentQuestion] = useState(q[number]);
  
  // const shuffle = arr => {
  //   let ctr = arr.length
  //   let temp
  //   let index
  //   while (ctr > 0) {
  //     index = Math.floor(Math.random() * ctr)
  //     ctr = ctr - 1
  //     temp = arr[ctr]
  //     arr[ctr] = arr[index]
  //     arr[index] = temp
  //   }
  //   return arr
  // } 


  let answers = [ ...currentQuestion.incorrect_answers]
  answers.push(currentQuestion.correct_answer)
  // shuffle(answers)

  console.log(currentQuestion.correct_answer)
  const handleSubmit = e => {
    e.preventDefault()
    if (answer === currentQuestion.correct_answer) {
      checkAnswer()
    }
    nextQuestion()
  }

  useEffect(() => {
    setCurrentQuestion(q[number]);
  }, [number])

  return (
    <div>
      <p className="question">{number+1}.{currentQuestion.question}</p>
      <p className="category">Category: {currentQuestion.category}</p>
      <div className="answers">
        {answers.map((a, index) => (
          <p key={index}>
            <label>
              <input 
              type="radio"
              value={a}
              checked={answer === a}
              onChange={() => setAnswer(a)}
              />
              {a}
            </label>
          </p>
        ))}
      </div>
      {number < q.length - 1 ? 
      <button onClick={handleSubmit}>Next</button> : 
      <button onClick={handleSubmit}>Done</button> 
      }
    </div>
  )
}

export default Question
