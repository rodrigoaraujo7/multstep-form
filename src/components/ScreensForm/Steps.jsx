import { AiOutlineUser, AiOutlineStar } from 'react-icons/ai'
import { FiSend } from 'react-icons/fi'

import './Steps.css'

export const Steps = ({ currentStep }) => {
    return (
        <div className='steps'>
            <div className="step">
                <AiOutlineUser />
                <p>Identify</p>
            </div>
            <div className="step">
                <AiOutlineStar />
                <p>Rating</p>
            </div>
            <div className="step">
                <FiSend />
                <p>Send Rate</p>
            </div>
        </div>
    )
}