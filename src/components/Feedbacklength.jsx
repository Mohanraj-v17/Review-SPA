import React, { useContext, useState } from 'react'
import FeedbackContext from './context/FeedbackContext'


const Feedbacklength = () => {

  const {feedback} = useContext(FeedbackContext);
  return (
    <div className='container'>
        <h5 className='length'>length:({feedback.length})</h5>
    </div>
  )
}

export default Feedbacklength