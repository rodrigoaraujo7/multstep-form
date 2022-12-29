// components
import { UserForm } from './components/ScreensForm/UserForm'
import { ReviewForm } from './components/ScreensForm/ReviewForm'
import { ThanksForm } from './components/ScreensForm/ThanksForm'
import { Steps } from './components/ScreensForm/Steps'

// hooks
import { useForm } from './hooks/useForm'

// utils
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'
import './App.css'

export const App = () => {
  const formComponents = [
    <UserForm />,
    <ReviewForm />,
    <ThanksForm />
  ]

  const {
    currentStep, 
    currentComponent, 
    changeStep, 
    isLastStep, 
    isFirstStep
  } = useForm(formComponents)

  return (
    <div className="app">
      <div className="header">
        <h2>Rate this product</h2>
        <p>We happy with your order, use the under form to rate this product</p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep} />
        <form onSubmit={event => changeStep(currentStep + 1, event)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            {!isFirstStep && (
              <button type='button' onClick={() =>  changeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span>Return</span>
              </button>
            )}

            {!isLastStep ? (
              <button type='submit'>
                <span>Next</span>
                <GrFormNext />
              </button>
            ) : (
              <button type='button'>
                <span>Send</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}