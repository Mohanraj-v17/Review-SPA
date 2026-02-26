import  { useContext } from 'react';
import Card from './shared/Card';
import { FaTrash } from "react-icons/fa6";
import FeedbackContext from './context/FeedbackContext';
import { MdEdit } from "react-icons/md";


const FeedbackItem = ( {item} ) => {

  const {deleteFeedback, editFeedback} = useContext(FeedbackContext);


  
  return (
    <Card>
        <div className='text-display'>
             {item.text || item.title} 
             <button className='delete' onClick= {() => deleteFeedback(item.id) }>
              <FaTrash />
             </button>
             <button className='edit' onClick= {() =>  editFeedback(item)}>
              <MdEdit />
             </button>
        </div>

    </Card>
  )
}

export default FeedbackItem