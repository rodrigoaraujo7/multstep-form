import { GrFormNext, GrFormPrevious } from 'react-icons/gr'

import './App.css'

export const App = () => {
  return (
    <div className="app">
      <div className="header">
        <h2>Rate this product</h2>
        <p>We happy with your order, use the under form to rate this product</p>
      </div>
      <div className="form-container">
        <p>steps</p>
        <form>
          <div className="actions">
            <button type='button'>
              <GrFormPrevious />
              <span>Return</span>
            </button>
            <button type='submit'>
              <span>Next</span>
              <GrFormNext />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}