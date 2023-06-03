import { useContext } from "react"
import Modal from 'react-bootstrap/Modal'
import { quizContext } from "../contexts/quizContext"
import SingleQuestion from "./Question"


const QuizModal = () => {
    const {
        quizState: {questions},
        showModal,
        setShowModal,
        timer
    } = useContext(quizContext)

    const closeDialog = () => {
        setShowModal(false)
    }

  return (
    <div>
        {questions.length > 0 && 
        <Modal show={showModal} onHide={closeDialog}>
            <Modal.Header>
                <Modal.Title>
                    <h1>
                        Time: {timer}
                    </h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <SingleQuestion q={questions}/>
                </div>
            </Modal.Body>
        </Modal>
        }
    </div>
  )
}

export default QuizModal