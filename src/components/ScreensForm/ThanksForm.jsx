import { 
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill
} from 'react-icons/bs'

import './Thanks.css'

const emojiData = {
    unsatisfied: <BsFillEmojiFrownFill />,
    neutral: <BsFillEmojiNeutralFill />,
    satisfied: <BsFillEmojiSmileFill />,
    very_satisfied: <BsFillEmojiHeartEyesFill />
}

export const ThanksForm = ({ data }) => {
    return (
        <div className='thanks-container'>
            <h2>Wait a minute...</h2>
            <p>
                Your opinion is a lot of important, later you'll 
                receive a 10% discount coupon to you next buy
            </p>
            <p>To complete your review, click the submit button below </p>
            <h3>Review Resume {data.name}</h3>
            <p className="review-data">
                <span>Product satisfaction:</span>
                {emojiData[data.review]}
            </p>
            <p className="review-data">
                <span>Comment:</span>
                {data.comment}
            </p>
        </div>
    )
}