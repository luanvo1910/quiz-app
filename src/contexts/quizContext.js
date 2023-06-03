import { createContext, useReducer, useState, useRef } from "react";
import { quizReducer } from "../reducers/quizReducer";
import axios from "axios";

export const quizContext = createContext()

const QuizContextProvider = ({children}) => {

    const [quizState, dispatch] = useReducer(quizReducer, {
        point: 0,
        number: 0,
        questions: [],
    })

    const getQuestions = async() => {
        try {
            const response = await axios.get(`https://opentdb.com/api.php?amount=5`)
            dispatch({type: 'QUIZ_LOADED_SUCCESS', payload: response.data.results})
        } catch (error) {
            dispatch({type: 'QUIZ_LOADED_FAIL'}) 
        }
    }

    const checkAnswer = () => {
        const point = quizState.point + 1
        dispatch({type: 'CORRECT_ANSWER', payload: point})
    }

    const nextQuestion = () => {
        const number = quizState.number + 1
        dispatch({type: 'NEXT_QUESTION', payload: number})
    }

    const [timer, setTimer] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const countRef = useRef(null)

    const handleStart = () => {
        setIsActive(true)
        setIsPaused(true)
        countRef.current = setInterval(() => {
          setTimer((timer) => timer + 1)
        }, 1000)
    }

    const handlePause = () => {
        clearInterval(countRef.current)
        setIsPaused(false)
    }

    const [isLoading, setIsLoading] = useState(false)

    const quizContextData = {
        quizState,
        getQuestions,
        checkAnswer,
        nextQuestion,
        timer,
        handleStart,
        handlePause,
        isLoading,
        setIsLoading
    }

    return (
        <quizContext.Provider value={quizContextData}>
            {children}
        </quizContext.Provider>
    )
}



export default QuizContextProvider
