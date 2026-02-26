import React, { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button';
import { useContext, useEffect } from 'react';
import FeedbackContext from './context/FeedbackContext';






const Feedbackform = () => {

    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext);

    const [text, setText] = useState("");
    const [btnDisable, setBtnDisable] = useState(true);
    const [message, setMessage] = useState('');

    useEffect(() => {

        if (feedbackEdit.edit === true) {
            setBtnDisable(false);
            setText(feedbackEdit.item.text || feedbackEdit.item.title || "");
        }
    }, [feedbackEdit]);

    const handleTextChange = (e) => {
        if (text === "") {
            setBtnDisable(true);
            setMessage(null);
        } else if (text !== "" && text.trim().length <= 10) {
            setBtnDisable(true);
            setMessage("text must be at least 10 characters");
        } else {
            setMessage(null);
            setBtnDisable(false);
        }
        setText(e.target.value);
    }



    const handleSubmit = (e) => {

        e.preventDefault();

        if (text.trim().length > 10) {
            const newFeedback = {
                text: text
            }

            if (feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback);
            } else {
                addFeedback(newFeedback);
            }


            // addFeedback(newFeedback);

            setBtnDisable(true);
            setMessage(null);
            setText("");
        }
    }



    return (
        <div>
            <Card>
                <form onSubmit={handleSubmit}>
                    <h4>Add your reviews</h4>

                    <div className="input-group">
                        <input value={text} onChange={handleTextChange} type="text" placeholder='review' />
                        <Button isDisabled={btnDisable}>send</Button>
                    </div>
                    {message && <p className='error'>{message}</p>}
                </form>
            </Card>
        </div>
    )
}

export default Feedbackform;